import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Allservices:any=[
    {id:'01',name:'Website Design and Development'},
    {id:'02',name:'Custom Software Development'},
    {id:'03',name:'App Design and Development'},
    {id:'04',name:'Social Media Management & Marketing '},
    {id:'05',name:'Business Process  Digitalization & Automation'},
    {id:'06',name:'Video Ad Making & Content Creation'},
  ]
  AllProducts:any=[
    {id:'01',name:'Clumps Systemic Solutions'},
    {id:'02',name:'Clumps CRM Plus'},
    {id:'03',name:'Clumps Service AUTOBOT'},
    {id:'04',name:'Clumps Service & Support Desk'},
    {id:'05',name:'Clumps Retail & Distributor  Suite'},
    {id:'06',name:'Clumps One Marketing Suite'},
  ]
  WorkProgress:any=[
    {id:'01',name:'Consultation',desc:''},
    {id:'02',name:'Research and Strategy Development',desc:''},
    {id:'03',name:'Implementation',desc:''},
    {id:'04',name:'Monitoring and Optimization',desc:''},
    {id:'05',name:'Reporting and Communication',desc:''},
    {id:'06',name:'Reporting and Communication',desc:''},
  ]
  constructor() { }

  hostUrl=environment.hostURL
  ngOnInit(): void {
  }

}
