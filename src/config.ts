import { FormioAppConfig } from 'angular-formio';
import { FormioAuthConfig } from 'angular-formio/auth';

export const AppConfig: FormioAppConfig = {
  appUrl: 'https://nnglnkqdvbdjltz.form.io',
  apiUrl: 'https://api.form.io'
};

export const AuthConfig: FormioAuthConfig = {
  login: {
    form: 'user/login'
  },
  register: {
    form: 'user/register'
  }
};
