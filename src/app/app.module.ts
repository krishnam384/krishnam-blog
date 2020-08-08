import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PostBlogComponent } from './post-blog/post-blog.component';
import { SingleBlogViewComponent } from './single-blog-view/single-blog-view.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
import { AboutComponent } from './about/about.component';
import { BlogDeleteComponent } from './blog-delete/blog-delete.component';
import { HttpClientModule } from '@angular/common/http';
import { BlogService } from './blog.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostBlogComponent,
    SingleBlogViewComponent,
    BlogEditComponent,
    AboutComponent,
    BlogDeleteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FormsModule

  ],
  providers: [BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
