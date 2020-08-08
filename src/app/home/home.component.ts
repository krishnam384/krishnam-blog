import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  blogs= [];
  constructor(private blogService: BlogService) {
    console.log("This is Home Component")
    this.blogService.getAllBlogs().subscribe(
      data => {
        console.log(data["data"]);
        this.blogs=data["data"];
      },

      error => {
        console.log("Error..!!");
        console.log(error.errorMessage);
      }
    );

   }

  ngOnInit() {
  }

  
  

}
