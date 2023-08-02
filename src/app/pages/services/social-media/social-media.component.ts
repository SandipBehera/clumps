import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.css']
})
export class SocialMediaComponent implements OnInit {

  constructor() { }
  hostUrl=environment.hostURL;

  disitalMarketing=[
    {
      name:'SEO ( Search engine optimization)',
      URL:''
    },
    {
      name:'PPC(Pay per click)',
      URL:''
    },
    {
      name:'Search Engine Marketing',
      URL:''
    },
    {
      name:'Social Media Marketing',
      URL:''
    },
    {
      name:'AD Campaigns',
      URL:''
    },
    {
      name:'Content Marketing',
      URL:''
    },
  ]
  ngOnInit(): void {
  }

}
