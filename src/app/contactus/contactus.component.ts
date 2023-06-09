import { Component, OnInit } from '@angular/core';
import { APIService, CreateTodoInput } from '../API.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
 public formState={
    name:'',
    email:'',
    phone: '',
    message:''
 }
submitted : any = false;
error : any = false;

  constructor(private apiService: APIService) { }

  ngOnInit(): void { }
  async handleSubmit(): Promise<void> {
    try {
      const createContactInput: CreateTodoInput = {
        name: this.formState.name,
        email: this.formState.email,
        phone: this.formState.phone,
        description: this.formState.message
      }
      await this.apiService.CreateTodo (createContactInput);
      this.submitted = true;
      
      // Add any necessary success handling code here

    } catch (error) {
      this.error = true;
      console.error('Error submitting form:', error);
      // Add any necessary error handling code here
    }
  }
}
