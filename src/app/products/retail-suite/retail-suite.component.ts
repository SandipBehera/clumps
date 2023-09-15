import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-retail-suite',
  templateUrl: './retail-suite.component.html',
  styleUrls: ['./retail-suite.component.css']
})
export class RetailSuiteComponent implements OnInit {

  constructor() { }

  Discover = [
    {
      name: 'Reduce Overstocks',
      desc: 'Reducing overstocks in stores by 20–30% is one of the most common results about a year after deploying Clumps Retail Suite. The improvement is mainly achieved by optimizing the sales space and linking planogram data to ERP and logistics systems.'
    },
    {
      name: 'Improve Process ',
      desc: 'Thanks to easier planning, built-in task management and a complete solution for the communication between headquarters and stores, our customers will be able to improve a number of key processes. An example is reducing the time needed to display products when opening a new store to less than half.'
    },
    {
      name: 'Store Planograms',
      desc: 'Store Specific Planograms Thanks to the smart automatic generating of planograms optimized according to sales based on user-defined templates it is possible to maintain the planograms in up-to-date state also in large sales networks with diverse stores without increasing demands on human resources.'
    },
    {
      name: 'Integrated Solutions',
      desc: 'Clumps Retail Suite is an integrated solution for Space Planning, Category Management, planograms, ranging, Shelf Labels and POS printing, communication with stores and In-store Marketing.'
    },
    {
      name: 'Increse  in Sales ',
      desc: 'The companies who will be using Clumps Retail Suite will see a 5–15% increase in sales in key categories. Optimized planograms and store floor plans improve visibility of important products, customer experience and logistics efficiency.'
    },
    {
      name: 'Exceptional support',
      desc: 'Our consultants are available to help you when you need it. We train your users and help with data integration so Clumps Retail Suite can be live in less than 12 weeks.'
    }
  ]
  ngOnInit(): void {
  }

}
