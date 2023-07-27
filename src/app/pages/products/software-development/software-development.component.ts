import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-software-development',
  templateUrl: './software-development.component.html',
  styleUrls: ['./software-development.component.css']
})
export class SoftwareDevelopmentComponent implements OnInit {

  constructor() { }
  hostUrl=environment.hostURL;
  ngOnInit(): void {
  }

}
