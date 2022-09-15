import { FormioAppConfig } from '@formio/angular';
import { FormioAuthConfig } from '@formio/angular/auth';

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
