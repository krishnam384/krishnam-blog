import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostBlogComponent } from './post-blog/post-blog.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
import { BlogDeleteComponent } from './blog-delete/blog-delete.component';
import { SingleBlogViewComponent } from './single-blog-view/single-blog-view.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path:'', redirectTo: '/home',pathMatch:'full' },
  {path:'home', component:HomeComponent },
  {path:'about', component:AboutComponent},
  {path:'create', component:PostBlogComponent },
  {path:'edit/:blogId', component:BlogEditComponent },
  {path:'blog/:blogId', component:SingleBlogViewComponent},
  {path:'delete', component:BlogDeleteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
