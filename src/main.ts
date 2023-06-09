import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import {Amplify} from 'aws-amplify';

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
Amplify.Logger.LOG_LEVEL = 'DEBUG';
Amplify.configure(awsmobile);

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
