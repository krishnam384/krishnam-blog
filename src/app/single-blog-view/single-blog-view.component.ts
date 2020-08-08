import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service'; 
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-single-blog-view',
  templateUrl: './single-blog-view.component.html',
  styleUrls: ['./single-blog-view.component.css']
})
export class SingleBlogViewComponent implements OnInit {

  currentBlog: string;
  blogId: string;

  constructor(private toastr: ToastrService, private blogService: BlogService, private _route: ActivatedRoute,private location: Location, private router: Router) { 
    this.blogId = this._route.snapshot.paramMap.get('blogId');
    console.log(this.blogId);
    this.blogService.getSingleBlog(this.blogId).subscribe(
      data => {
        console.log(data);
        this.currentBlog = data["data"];
      },
      err => {
        console.log(err.errorMessage);
      }
    );
  }

  public goBack(){
    this.location.back();
  }

  public deletePost(){
    this.blogService.deleteSelectedPost(this.blogId).subscribe(
      data => {
        console.log("Here is the deleted data"+ data);
        console.log("Post deleted Successfully");

        setTimeout(() => {
          this.router.navigate(['/home']);
        },1000);
        
        this.toastr.success("Post Successfully Deleted..!!", "Deleted")
        
      }
    );

  }

  ngOnInit(): void {
    console.log("This is single blog")
  }

}
