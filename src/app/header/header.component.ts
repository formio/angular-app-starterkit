import { Component, OnInit } from '@angular/core';
import { FormioAuthService } from 'angular-formio/auth';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor(public auth: FormioAuthService) {}

  ngOnInit() {}

}
