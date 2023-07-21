import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-accodian',
  templateUrl: './accodian.component.html',
  styleUrls: ['./accodian.component.css']
})
export class AccodianComponent implements OnInit {

  constructor() { }
  isAccordianOpen:boolean=false;
  Text="01 Hello"
  @Input() workprogress={id:'',name:'',desc:''}
  ngOnInit(): void {
  }
  toggle(){
    this.isAccordianOpen=!this.isAccordianOpen;
  }
}
