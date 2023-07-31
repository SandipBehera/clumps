import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-web-development',
  templateUrl: './web-development.component.html',
  styleUrls: ['./web-development.component.css']
})
export class WebDevelopmentComponent implements OnInit {

  constructor() { }
  Technology=[
    {
      name:'HTML',
      URL:'html'
    },
    {
      name:'LARAVEL',
      URL:'laravel'
    },
    {
      name:'REACT JS',
      URL:'react'
    },
    {
      name:'JAVASCRIPT',
      URL:'javascript'
    },
    {
      name:'JAVA',
      URL:'java'
    },
    {
      name:'VUE',
      URL:'vue'
    },
    {
      name:'NODE JS',
      URL:'node'
    },
   
  ]
  hostUrl=environment.hostURL;
  ngOnInit(): void {
  }

}
