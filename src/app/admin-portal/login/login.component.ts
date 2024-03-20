import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { APIService, CreateTodoInput } from 'src/app/API.service';
import { environment } from 'src/environments/environment.dev';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formState = {
    username: '',
    password: ''
  };
  submitted: any = false;
  invalidCredentials: any = false;
  error: any = false;
  emptyValue: any = false;
  myFrom: FormGroup | any;
  constructor(
    private apiService: APIService,
    private formbuilder: FormBuilder, private router: Router) {
    this.Createform();
  }
  hostUrl = environment.hostURL;
  ngOnInit(): void { }
  Createform() {
    this.myFrom = this.formbuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  async handleSubmit(): Promise<void> {
    try {
      const createContactInput: any = {
        username: this.formState.username,
        password: this.formState.password
      };
      if (
        createContactInput.username !== '' ||
        createContactInput.password !== ''
      ) {
        if (await this.apiService.adminLogin(createContactInput.username, createContactInput.password)) {
          this.router.navigate(['/admin/home']);
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
