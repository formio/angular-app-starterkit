import {Component} from '@angular/core';
import { FormioAuthService } from 'angular-formio/auth';

@Component({
  selector: 'formio-header',
  template: require('./header.html')
})
export class HeaderComponent {
  constructor(public auth: FormioAuthService) {}
}
