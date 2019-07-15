import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormioResources } from 'angular-formio/resource';
import { FormioAuthService } from 'angular-formio/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(
    private auth: FormioAuthService,
    private router: Router,
    public resources: FormioResources
  ) {
    this.auth.ready.then(() => {
      if (!this.auth.authenticated) {
        this.router.navigate(['/auth/login']);
      }
    });
    this.auth.onLogin.subscribe(() => {
      this.router.navigate(['/home']);
    });

    this.auth.onLogout.subscribe(() => {
      this.router.navigate(['/auth/login']);
    });

    this.auth.onRegister.subscribe(() => {
      this.router.navigate(['/home']);
    });
  }
}
