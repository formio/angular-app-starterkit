import {Component} from '@angular/core';
import { FormioAuthService } from 'ng2-formio/auth';
@Component({
  template: require('./home.html')
})
export class HomeComponent {
  constructor(public auth: FormioAuthService) {}
}
