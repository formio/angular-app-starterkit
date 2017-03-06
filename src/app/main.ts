import { Component } from '@angular/core';
import { FormioAuthService } from 'ng2-formio/auth';
import { AuthService } from '../config';

@Component({
  selector: 'formio-app',
  template: require('./main.html')
})
export class MainComponent {
  constructor() {
    AuthService.onLogin.subscribe(() => {
      location.href = '/';
    });

    AuthService.onLogout.subscribe(() => {
      location.href = '/';
    });

    AuthService.onRegister.subscribe(() => {
      location.href = '/';
    });
  }
}
