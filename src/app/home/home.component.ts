import { Component, OnInit } from '@angular/core';
import { FormioAuthService } from 'angular-formio/auth';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor(public auth: FormioAuthService) { }

  ngOnInit() {
  }

}
