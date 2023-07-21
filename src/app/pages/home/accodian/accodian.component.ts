import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accodian',
  templateUrl: './accodian.component.html',
  styleUrls: ['./accodian.component.css']
})
export class AccodianComponent implements OnInit {

  constructor() { }
  isAccordianOpen:boolean=false;
  Text="01 Hello"
  ngOnInit(): void {
  }

}
