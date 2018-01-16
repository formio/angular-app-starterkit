import { Component, OnInit } from '@angular/core';
import { FormioResourceConfig, FormioResourceService, FormioResourceViewComponent } from 'angular-formio/resource';
import { AppConfig } from '../../../config';

@Component({
  selector: 'app-event-view',
  templateUrl: './event-view.component.html',
  styleUrls: ['./event-view.component.scss']
})
export class EventViewComponent extends FormioResourceViewComponent implements OnInit {
  public registrationForm: string;

  constructor(service: FormioResourceService, config: FormioResourceConfig) {
    super(service, config);
  }

  ngOnInit() {
    this.service.resourceLoaded.then((event) => {
      this.registrationForm = AppConfig.appUrl + '/' + event.data.registrationForm;
    });
  }

  onRegister(registration: any) {
    console.log(registration);
  }
}
