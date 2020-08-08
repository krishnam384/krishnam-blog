import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  baseUrl: string = "https://blogapp.edwisor.com/api/v1/blogs";
  authToken: string = "Y2NjZjVjNGZhZjlmNjMyZjc0MDc2ZmM3ODY2OTQ4MjBlYzZkMjU2MTM4M2ZjNzc4YmRjNjI2YmVhNWE2ZjM1Mjc5MzM2NGRjZDFiYjg3N2VjNzE5Y2FhM2Q0MzlkM2E1YmY2Nzk0NzM4ZGY0MDUwYmM1MmVmOTBhMjE3MmU2ZWRkNQ==";

  constructor(private httpClient: HttpClient) { 
    console.log("This is Blog Service");
  }
  public getAllBlogs(){
    const response = this.httpClient.get(`${this.baseUrl}/all?authToken=${this.authToken}`);
    return response;
  }

  public getSingleBlog(data){
    const response = this.httpClient.get(`${this.baseUrl}/view/${data}?authToken=${this.authToken}`);
    console.log(response);
    return response;
  }

  public deleteSelectedPost(id){
    let data = {};
    const response = this.httpClient.post(`${this.baseUrl}/${id}/delete?authToken=${this.authToken}`,data);
    return response;
  }

  public createBlog(data){
    const response = this.httpClient.post(`${this.baseUrl}/create?authToken=${this.authToken}`,data);
    return response;
  }

  

  public editBlog(data,id){
    const response = this.httpClient.put(`${this.baseUrl}/${id}/edit?authToken=${this.authToken}`,data);
    return response;
  }
  
}
