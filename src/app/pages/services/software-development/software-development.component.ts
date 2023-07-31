import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-software-development',
  templateUrl: './software-development.component.html',
  styleUrls: ['./software-development.component.css']
})
export class SoftwareDevelopmentComponent implements OnInit {
  Technology:any=[
    {id:'01',name:'Java Developer',URL:''},
    {id:'02',name:'Python Developer',URL:''},
    {id:'03',name:'Node JS Developer',URL:''},
    {id:'04',name:'React js Developer',URL:''},
    {id:'05',name:'Android Developer',URL:''},
    {id:'06',name:'IOS Developer',URL:''},
  ]
  constructor() { }
  hostUrl=environment.hostURL;
  ngOnInit(): void {
  }

}
