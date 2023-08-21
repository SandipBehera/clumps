import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-clumps-marketing-suite',
  templateUrl: './clumps-marketing-suite.component.html',
  styleUrls: ['./clumps-marketing-suite.component.css']
})
export class ClumpsMarketingSuiteComponent implements OnInit {

  constructor() { }
  hostUrl=environment.hostURL;
  Engagement=[
    {
      name:'E-Commerce',
      desc:'Increase conversion, reduce cart abandonment and increase retention for your brand.'
    },
    {
      name:'EdTech',
      desc:'Drive Views, increase Subscriptions and boost Engagement for your EdTech Business.'
    },
    {
      name:'Finance & Banking',
      desc:'Build Trust & Credibility with your customers with timely nudges and knowledge transfer.'
    },
    {
      name:'Gaming & Entertainment',
      desc:'Turn free gamers into paying customers with a highly curated engagement strategy.'
    },
    {
      name:'Travel & Hospitality ',
      desc:'Increase travel bookings, upsell packages and boost the Average Order Value.'
    },
    {
      name:'D to C',
      desc:'Reduce customer churn and increase brand loyalty for your Direct-to-Consumer Business.'
    },
  ]
  ngOnInit(): void {
  }

}
