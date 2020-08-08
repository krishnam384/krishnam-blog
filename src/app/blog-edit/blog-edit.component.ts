import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BlogService } from '../blog.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']
})
export class BlogEditComponent implements OnInit {

  public currentBlog: string;
  blogId: string;
  public categories = ["Drama","Comedy","Action","Technology"];

  constructor(private blogService: BlogService, private _route:ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.blogId = this._route.snapshot.paramMap.get('blogId');
    this.blogService.getSingleBlog(this.blogId).subscribe(
      data => {
        console.log(data);
        this.currentBlog = data["data"];
      },
      error => {
        console.log(error.errorMessage);
      }

    )
  }

  editBlog(form: NgForm) {
    console.log('Your form data : ', form.value);

    this.blogService.editBlog(this.currentBlog,this.blogId).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['/blog',this.blogId])
      }
    )
}

}
