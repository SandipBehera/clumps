import { Component, OnInit } from '@angular/core';
import { APIService, CreateTodoInput } from '../API.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
emptyValue : any = false;
  myFrom: FormGroup | any;
  constructor(private apiService: APIService, private formbuilder:FormBuilder) {
    this.Createform();
   }

  ngOnInit(): void { }
  Createform(){
    this.myFrom=this.formbuilder.group({
      name:['',Validators.required],
      email:['', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])],
      phone:['',[Validators.required,Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
      message:['',Validators.required]
    })
   }
  async handleSubmit(): Promise<void> {
    try {
      const createContactInput: CreateTodoInput = {
        name: this.formState.name,
        email: this.formState.email,
        phone: this.formState.phone,
        description: this.formState.message
      }
      console.log(createContactInput);
      if(createContactInput.name !=='' || createContactInput.email !=='' || createContactInput.phone !=='' || createContactInput.description !==''){
      await this.apiService.CreateTodo (createContactInput);
      this.submitted = true;
      }
      else{
        this.emptyValue = true;
      }
      // Add any necessary success handling code here

    } catch (error) {
      this.error = true;
      console.error('Error submitting form:', error);
      // Add any necessary error handling code here
    }
  }
}
