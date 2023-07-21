import { Component } from '@angular/core';
import {Amplify} from 'aws-amplify';
import * as  AOS  from "aos";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clumps';
  constructor() { 
    this.loadJsFile("../assets/frontent_files/js/main.js"); 
    const awsmobile = {
      "aws_project_region": "us-east-2",
      "aws_appsync_graphqlEndpoint": "https://vktteuvmrrbetn6fnunchmpqgi.appsync-api.us-east-2.amazonaws.com/graphql",
      "aws_appsync_region": "us-east-2",
      "aws_appsync_authenticationType": "API_KEY",
      "aws_appsync_apiKey": "da2-wqx6fbc7cfaanfxcmhrbvzrwwe",
      "aws_cognito_identity_pool_id": "us-east-2:02f859a7-a41e-4b7d-92d9-f45251937298",
      "aws_cognito_region": "us-east-2",
      "aws_user_pools_id": "us-east-2_TUqJKffGI",
      "aws_user_pools_web_client_id": "4cjue53ohjfetv7c4dlg85qhp",
      "oauth": {},
      "aws_cognito_username_attributes": [
          "EMAIL",
          "PHONE_NUMBER"
      ],
      "aws_cognito_social_providers": [],
      "aws_cognito_signup_attributes": [
          "EMAIL"
      ],
      "aws_cognito_mfa_configuration": "OFF",
      "aws_cognito_mfa_types": [
          "SMS"
      ],
      "aws_cognito_password_protection_settings": {
          "passwordPolicyMinLength": 8,
          "passwordPolicyCharacters": []
      },
      "aws_cognito_verification_mechanisms": [
          "EMAIL"
      ]
    };
    
    Amplify.configure(awsmobile);
    AOS.init();

  }
  loadJsFile(url: any): void {  
    let node = document.createElement('script');  
    node.src = url;  
    node.type = 'text/javascript';  
    document.getElementsByTagName('head')[0].appendChild(node);  
  } 
}
