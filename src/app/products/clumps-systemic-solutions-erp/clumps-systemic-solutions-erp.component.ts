import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-clumps-systemic-solutions-erp',
  templateUrl: './clumps-systemic-solutions-erp.component.html',
  styleUrls: ['./clumps-systemic-solutions-erp.component.css']
})
export class ClumpsSystemicSolutionsERPComponent implements OnInit {

  constructor() { }
  hostUrl=environment.hostURL;
  Production=[
    {
      name:'Multi-Level Bill of Materials'
    },
    {
      name:'Work Order'
    },
    {
      name:'Outsourcing / Sub-Contract'
    },
    {
      name:'Line Rejection Tracking'
    },
    {
      name:'BOM Costing'
    },
    {
      name:'Production Order'
    },
    {
      name:'Finished Goods Testing'
    },
    {
      name:'Process Routing'
    }
  ]
  sales=[
    {
      name:'Order Confirmation'
    },
    {
      name:'Purchase Order'
    },
    {
      name:'Inward/GRN Register'
    },
    {
      name:'E-Way Bill'
    },
    {
      name:'Sales Order'
    },
    {
      name:'GST Invoices'
    },
    {
      name:'Credit/Debit Note'
    },
    {
      name:'Service Transactions'
    },
  ]
  Inventory=[
    {
      name:'Order Confirmation',
    },
    {
      name:'Purchase Order',
    },
    {
      name:'Inward/GRN Register',
    },
    {
      name:'E-Way Bill',
    },
    {
      name:'Sales Order',
    },
    {
      name:'GST Invoices',
    },
    {
      name:'Credit/Debit Note',
    },
    {
      name:'Service Transactions',
    },
  ]
  ngOnInit(): void {
  }

}
