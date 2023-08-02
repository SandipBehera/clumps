import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-business-automation',
  templateUrl: './business-automation.component.html',
  styleUrls: ['./business-automation.component.css']
})
export class BusinessAutomationComponent implements OnInit {

  constructor() { }

  hostUrl=environment.hostURL;
  ngOnInit(): void {
  }

}
