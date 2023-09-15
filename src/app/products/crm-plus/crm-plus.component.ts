import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-crm-plus',
  templateUrl: './crm-plus.component.html',
  styleUrls: ['./crm-plus.component.css']
})
export class CrmPlusComponent implements OnInit {

  constructor() { }
  hostUrl=environment.hostURL;

  ngOnInit(): void {
  }

}
