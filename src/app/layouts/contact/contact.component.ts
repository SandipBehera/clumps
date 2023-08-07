import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { APIService, CreateTodoInput } from 'src/app/API.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  public formState = {
    name: '',
    email: '',
    phone: '',
    message: '',
  };
  submitted: any = false;
  error: any = false;
  emptyValue: any = false;
  myFrom: FormGroup | any;
  constructor(
    private apiService: APIService,
    private formbuilder: FormBuilder
  ) {
    this.Createform();
  }
  hostUrl = environment.hostURL;
  ngOnInit(): void {}
  Createform() {
    this.myFrom = this.formbuilder.group({
      name: ['', Validators.required],
      email: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
        ]),
      ],
      phone: [
        '',
        [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')],
      ],
      message: ['', Validators.required],
    });
  }
  async handleSubmit(): Promise<void> {
    try {
      const createContactInput: CreateTodoInput = {
        name: this.formState.name,
        email: this.formState.email,
        phone: this.formState.phone,
        description: this.formState.message,
      };
      console.log(createContactInput);
      if (
        createContactInput.name !== '' ||
        createContactInput.email !== '' ||
        createContactInput.phone !== '' ||
        createContactInput.description !== ''
      ) {
        await this.apiService.CreateTodo(createContactInput);
        this.submitted = true;
      } else {
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
