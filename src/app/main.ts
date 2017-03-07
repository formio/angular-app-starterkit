import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormioAuthService } from 'ng2-formio/auth';

@Component({
  selector: 'formio-app',
  template: require('./main.html')
})
export class MainComponent {
  constructor(
    private service: FormioAuthService,
    private router: Router
  ) {
    this.service.onLogin.subscribe(() => {
      this.router.navigate(['/']);
    });

    this.service.onLogout.subscribe(() => {
      this.router.navigate(['/']);
    });

    this.service.onRegister.subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
