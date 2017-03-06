import { OpaqueToken } from "@angular/core";
import { FormioAppConfig } from 'ng2-formio';
import { FormioAuthService, FormioAuthConfig } from 'ng2-formio/auth';
export let APP_CONFIG = new OpaqueToken("app.config");

var APP_URL = 'https://example.form.io';
var API_URL = 'https://api.form.io';

var query: any = {};
location.search.substr(1).split('&').forEach(function(item) {
  query[item.split("=")[0]] = item.split('=')[1] && decodeURIComponent(item.split("=")[1]);
});

APP_URL = query.appUrl || APP_URL;
API_URL = query.apiUrl || API_URL;

export const AppConfig: FormioAppConfig = {
  appUrl: APP_URL,
  apiUrl: API_URL
}

export const AuthConfig: FormioAuthConfig = {
  app: AppConfig,
  login: {
    form: 'user/login'
  },
  register: {
    form: 'user/register'
  }
}

// Create the root authentication service.
export const AuthService: FormioAuthService = new FormioAuthService(AuthConfig);
