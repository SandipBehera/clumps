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
  ByIndustry=[
    {
      name:'Banking , Financial services and insurance ',
      desc:`
      <li>Bank account opening </li>
      <li>credit approval</li>
      <li>cost estimation and tracking</li>
      <li>customer background checking ( banking and insurance)</li>
      <li>Customer self service via virtual agents</li>
      <li>Premium Calculator (insurance)</li>
      <li>claims processing (insurance)</li>`
    },
    {
      name:'Manufacturing',
      desc:`
      <li>Tracking of product design revisions</li>
  <li>Inventory tracking</li>
  <li>Asset inspections</li>
  <li>work order management</li>
  <li>Quality control</li>
  <li>equipment calibration</li>
  <li>remote equipment condition monitoring </li>
  <li>employee health and safety monitoring </li>`
    },
    {
      name:'Healthcare',
      desc:`
      <li>appointment scheduling</li>
  <li>patient admission</li>
  <li>patient record management</li>
  <li>remote patient health tracking </li>
  <li>smart lighting scheduling in hospitals</li>
  <li>medical billing and payment automation</li>
  <li>healthcare claims automation</li>
  <li>healthcare audits</li>`
    },
    {
      name:'Retail',
      desc:`
      <li>product catalog management</li>
  <li>warehouse navigation</li>
  <li>inventory tracking </li>
  <li>return processing </li>
  <li>customer self service</li>
  <li>reporting on store sales , sales trends,etc.</li>`
    },
    {
      name:'Telecom',
      desc:`
      <li>Network performance monitoring </li>
  <li>media content delivery </li>
  <li>purchase order creation and tracking </li>
  <li>Billing automation</li>
  <li>expense control</li>
  <li>Dept. Collection</li>
  <li>FCC Compliance tracking </li>`
    }
  ]

  business=[
    {
      name:'Supply chain management',
      desc:`<li>Monitoring of Inventory levels</li>
      <li>Automated alerts on stock count</li>
      <li>order fulfillment tracking </li>
      <li>Supplier portal</li>
      `
    },
    {
      name:'Accounting and finance management',
      desc:`<li>Contract management</li>
      <li>AP/AR Tracking </li>
      <li>expense approval and reporting </li>
      <li>Tax calculation and reporting</li>
      <li>financial reporting</li>
      <li>automated invoicing </li>
      <li>automated payment collecting </li>
      <li>Realtime cashflow report and revenue calculation</li>
      <li>Schduled cash transfer</li>`
    },
    {
      name:'HR managment',
      desc:`<li>HR document management</li>
      <li>Candidate sourcing</li>
      <li>applicant tracking </li>
      <li>employee on/off boarding </li>
      <li>employee training and request management</li>
      <li>payroll management</li>
      <li>work scheduling </li>
      <li>benefits & time off tracking </li>
      <li>employee self service portal</li>
      <li>employee performance review scheduling </li>`
    },
    {
      name:'Marketing and sales management',
      desc:`<li>Marketing content publishing / distribution</li>
      <li>Lead Nurturing </li>
      <li>Marketing Campaign automation</li>
      <li>email automation</li>
      <li>Lead Conversion</li>
      <li>Claims processing </li>
      <li>Pricing Calculation</li>
      <li>quote/ proposl approval</li>
      <li>product discount calculation </li>
      `
    },
    {
      name:'Customer Service Management',
      desc:`<li>Customer self service (e.g., a portal , a knowledge base )</li>
      <li>email scheduling</li>
      <li>Customer communication (e.g., live chat ,chatbots , virtual assistance) </li>
      <li>Support ticket creation and tracking </li>
       `
    },
    
  ]
  ngOnInit(): void {
  }

}
