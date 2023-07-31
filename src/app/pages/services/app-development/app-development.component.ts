import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-app-development',
  templateUrl: './app-development.component.html',
  styleUrls: ['./app-development.component.css']
})
export class AppDevelopmentComponent implements OnInit {

  constructor() { }
  hostUrl=environment.hostURL;
  appDevService=[
    {
      name:'Product Design ',
      desc:'We analyze the market and your brand identity to spot and manifest your competitive advantage.'
    },
    {
      name:'Mobile App Consulting ',
      desc:'We assist with app concept finalization, advise on platform/device compatibility, plan project activities, and optimize development costs.'
    },{
      name:'Mobile App Design',
      desc:'Our designers create sleek and intuitive interfaces that ensure conversion, engagement, and easy adoption. '
    },{
      name:'Mobile App Development',
      desc:'Our developers create and deploy fast, stable & high-performing mobile apps: 350+ projects we succesfull implemented is solid proof. '
    },{
      name:'Website Development',
      desc:'Clumps Software is ready to complement your mobile app with a web app, web portal, online store or SaaS. '
    },{
      name:'Mobile App Integration',
      desc:'Well-versed in a wide range of APIs, we guarantee seamless integration with back ends and any third-party software. '
    },{
      name:'Testing and QA',
      desc:'Our ISTQB-certified test engineers perform functional, performance, security, UX, and accessibility testing. '
    },{
      name:'Maintenance and Support ',
      desc:'Clumps Software Solutions  offers post-launch L1–L3 support, compliance, security, and performance management & app evolution.'
    },{
      name:'Mobile App Modernization',
      desc:'Our developers redesign the architecture, refactor code, and offer new look and feel to legacy mobile apps. '
    }
  ]
  mobileDev=[
    {
      name:'Mobile Banking , Billing Apps, Wallets',
      URL:'9198407-1.png'
    },
    {
      name:'Patient and Hospital apps',
      URL:'7130666-1.png'
    },
    {
      name:'Messaging and VoIP Apps',
      URL:'749772-1.png'
    },
    {
      name:'IPTV and SVOD Apps',
      URL:'8476942-1.png'
    },
    {
      name:'Mobile Commerce Apps',
      URL:'1149305-1.png'
    },
    {
      name:'Field Service and Mobile BI',
      URL:'10774798-1.png'
    },
    {
      name:'Booking and Ticketing Apps',
      URL:'7842291-1.png'
    },
    {
      name:'Fintech Apps',
      URL:'9954611-1.png'
    },
    {
      name:'Ed Tech Apps',
      URL:'2931260-1.png'
    },

  ]
  starData=[
    {
      desc:'Apps for all versions of iOS, watchOS, Android, and Wear OS '
    },
    {
      desc:'Native & cross-platform apps (React Native, Xamarin, Flutter)'
    },
    {
      desc:'Enterprise apps (for internal use) and monetized products '
    },
    {
      desc:'Mobile app-only and mobile app + web app solutions (incl. PWAs*)'
    },
  ]
  ngOnInit(): void {
  }

}
