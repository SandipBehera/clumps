import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-clumps-ecommerce-suite',
  templateUrl: './clumps-ecommerce-suite.component.html',
  styleUrls: ['./clumps-ecommerce-suite.component.css']
})
export class ClumpsEcommerceSuiteComponent implements OnInit {

  constructor() { }
  hostUrl=environment.hostURL;
  ngOnInit(): void {
  }

}
