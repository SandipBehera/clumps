import { Component, OnInit } from '@angular/core';
import { APIService } from '../API.service';
import { Blogs } from '../admin-portal/models/blogs';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  blogs:Blogs[]=[];
p: string|number|undefined;
  constructor(private apiService:APIService) { }

  ngOnInit(): void {
   this.blogs= this.apiService.getBlogs()
   console.log(this.blogs)
  }

}
