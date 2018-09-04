import { FormioAppConfig } from 'angular-formio';
import { FormioAuthConfig } from 'angular-formio/auth';

export const AppConfig: FormioAppConfig = {
  appUrl: 'https://example.form.io',
  apiUrl: 'https://api.form.io',
  icons: 'fontawesome'
};

export const AuthConfig: FormioAuthConfig = {
  login: {
    form: 'user/login'
  },
  register: {
    form: 'user/register'
  }
};
