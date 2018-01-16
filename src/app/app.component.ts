import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormioAuthService } from 'angular-formio/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'app';

  constructor(private auth: FormioAuthService, private router: Router) {
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
