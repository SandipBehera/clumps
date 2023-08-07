import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Allservices:any=[
    {id:'01',name:'Website Design and Development',URL:'service/web-development'},
    {id:'02',name:'Custom Software Development',URL:'service/software-development'},
    {id:'03',name:'App Design and Development',URL:'service/app-development'},
    {id:'04',name:'Social Media Management & Marketing ',URL:'service/social-media-ads'},
    {id:'05',name:'Business Process  Digitalization & Automation',URL:'service/business-automation'},
    {id:'06',name:'Video Ad Making & Content Creation',URL:''},
  ]
  AllProducts:any=[
    {id:'01',name:'Clumps Systemic Solutions',URL:''},
    {id:'02',name:'Clumps CRM Plus',URL:''},
    {id:'03',name:'Clumps Service AUTOBOT',URL:''},
    {id:'04',name:'Clumps Service & Support Desk',URL:''},
    {id:'05',name:'Clumps Retail & Distributor  Suite',URL:''},
    {id:'06',name:'Clumps One Marketing Suite',URL:''},
  ]
  WorkProgress:any=[
    {id:'01',name:'Consultation',desc:`Initial client meeting to understand their business goals and challenges.
    In-depth discussion to identify specific software requirements and expectations.
    Gathering information about the target audience and user preferences.
    Conducting a needs analysis to determine the most suitable custom solutions.`},
    {id:'02',name:'Research and Strategy Development',desc:`Thorough market research to analyze industry trends and competitors.Developing a comprehensive strategy based on the client's goals and research insights.
    Creating a detailed project plan, outlining timelines, milestones, and resource allocation.
    Collaborating with the client to finalize the strategy and project scope.`},
    {id:'03',name:'Implementation',desc:`Assigning skilled developers and designers to work on the project.
    Starting the software development process, following agile methodologies.
    Regularly reviewing the progress with the client and seeking feedback.
    Ensuring seamless integration of custom software with existing systems, if applicable.`},
    {id:'04',name:'Monitoring and Optimization',desc:`Continuously monitoring the performance and functionality of the custom software.
    Conducting testing and quality assurance at different stages of development.
    Identifying and addressing any issues or bugs promptly.
    Implementing optimization techniques to enhance the software's efficiency`},
    {id:'05',name:'Reporting and Communication',desc:`Providing regular progress updates and status reports to the client.
    Maintaining open and transparent communication channels throughout the project.
    Addressing any queries or concerns from the client promptly.
    Seeking client feedback at key milestones to ensure alignment with expectations.
    `},
    {id:'06',name:'Reporting and Communication',desc:`Conducting post-launch evaluations to measure the software's effectiveness.
    Gathering user feedback and insights for further improvements.
    Collaborating with the client to implement additional features or updates.
    Staying up-to-date with the latest technological advancements and industry best practices.`},
  ]
  constructor() { }

  hostUrl=environment.hostURL;
  ngOnInit(): void {
  }

}
