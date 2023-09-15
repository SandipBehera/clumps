import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  hostUrl=environment.hostURL
  constructor() { }
  Allservices:any=[
    {id:'01',name:'Website Design and Development',URL:'service/web-development'},
    {id:'02',name:'Custom Software Development',URL:'service/software-development'},
    {id:'03',name:'App Design and Development',URL:'service/app-development'},
    {id:'04',name:'Social Media Management & Marketing ',URL:'service/social-media-ads'},
    {id:'05',name:'Business Process  Digitalization & Automation',URL:'service/business-automation'},
  ]
  AllProducts:any=[
    {id:'01',name:'Clumps Systemic Solutions',URL:'product/clumps-systemic-solutions-erp'},
    {id:'02',name:'Clumps CRM Plus',URL:'product/crm-plus'},
    {id:'03',name:'Clumps E-commerce',URL:'product/clumps-e-commerce-suite'},
    {id:'04',name:'Clumps Retail & Distributor  Suite',URL:'product/retail-suite'},
    {id:'05',name:'Clumps One Marketing Suite',URL:'product/clumps-marketing-suite'},
  ]
  ngOnInit(): void {
  }

}
