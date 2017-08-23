import {Component} from '@angular/core';
import { FormioAuthService } from 'angular-formio/auth';
@Component({
  template: require('./home.html')
})
export class HomeComponent {
  constructor(public auth: FormioAuthService) {}
}
