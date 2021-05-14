import { Component } from '@angular/core';
import { FormioAuthLoginComponent } from '@formio/angular/auth';
@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent extends FormioAuthLoginComponent {}
