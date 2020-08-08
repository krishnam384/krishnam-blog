import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BlogService } from '../blog.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post-blog',
  templateUrl: './post-blog.component.html',
  styleUrls: ['./post-blog.component.css']
})
export class PostBlogComponent implements OnInit {

						categories = ["Drama","Comedy","Action","Technology"];

  constructor(private toastr: ToastrService, private blogService: BlogService, private _route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log('Your form data : ', form.value);
    let blogData = {
      title: form.value.title,
      description: form.value.description,
      blogBody: form.value.bodyHtml,
      category: form.value.blogCategory
    }
    this.blogService.createBlog(blogData).subscribe(
      data => {
        console.log(data["data"].blogId);
        this.router.navigate(['/blog',data["data"].blogId])
      }
    )
}

}
