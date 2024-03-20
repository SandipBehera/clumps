import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { APIService } from 'src/app/API.service';
import { environment } from 'src/environments/environment';
import { Blogs } from '../models/blogs';
@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  public formState = {
    title: '',
    description: ''
  };
  submitted: any = false;
  invalidCredentials: any = false;
  error: any = false;
  emptyValue: any = false;
  myFrom: FormGroup | any;
  myBlogs: Blogs[] = [];
  constructor(
    private apiService: APIService,
    private formbuilder: FormBuilder, private router: Router) {
    this.Createform();
  }
  hostUrl = environment.hostURL;
  ngOnInit(): void { }
  Createform() {
    this.myFrom = this.formbuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    });
  }
  async handleSubmit(): Promise<void> {
    try {
      const createContactInput: any = {
        title: this.formState.title,
        description: this.formState.description
      };
      if (
        createContactInput.title !== '' ||
        createContactInput.description !== ''
      ) {
        if (await this.apiService.addBlogs(createContactInput.title, createContactInput.description)) {
          this.submitted = true;
          this.myFrom.reset();
        }
        else {
          this.invalidCredentials = true;
        }
      } else {
        this.emptyValue = true;
      }
    } catch (error) {
      this.error = true;
      console.error('Error submitting form:', error);
    }
  }

}
