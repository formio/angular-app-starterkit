import { Component } from '@angular/core';
import { FormioAuthService } from 'ng2-formio/auth';

@Component({
  selector: 'formio-app',
  template: require('./main.html')
})
export class MainComponent {
  constructor(private service: FormioAuthService) {
    this.service.onLogin.subscribe(() => {
      location.href = '/';
    });

    this.service.onLogout.subscribe(() => {
      location.href = '/';
    });

    this.service.onRegister.subscribe(() => {
      location.href = '/';
    });
  }
}
