import {Component} from '@angular/core';
import { FormioAuthService } from 'ng2-formio/auth';

@Component({
  selector: 'formio-header',
  template: require('./header.html')
})
export class HeaderComponent {
  constructor(public auth: FormioAuthService) {}
}
