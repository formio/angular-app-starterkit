import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormioAuthService } from 'angular-formio/auth';
import { FormioResources } from 'angular-formio/resource';

@Component({
  selector: 'formio-app',
  template: require('./main.html')
})
export class MainComponent {
  constructor(
    private auth: FormioAuthService,
    private resources: FormioResources,
    private router: Router
  ) {
    this.auth.onLogin.subscribe(() => {
      this.router.navigate(['/']);
    });

    this.auth.onLogout.subscribe(() => {
      this.router.navigate(['/']);
    });

    this.auth.onRegister.subscribe(() => {
      this.router.navigate(['/']);
    });

    this.auth.onError.subscribe(() => {
      this.router.navigate(['/']);
    });

    this.resources.onError.subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
