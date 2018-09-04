import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormioAuthService } from 'angular-formio/auth';
import {
  FormioResourceCreateComponent,
  FormioResourceService,
  FormioResourceConfig
} from 'angular-formio/resource';
import FormioUtils from 'formiojs/utils';

@Component({
  selector: 'app-participant-create',
  templateUrl: './participant-create.component.html',
  styleUrls: ['./participant-create.component.scss']
})
export class ParticipantCreateComponent extends FormioResourceCreateComponent implements OnInit {
  constructor(
    public service: FormioResourceService,
    public auth: FormioAuthService,
    public route: ActivatedRoute,
    public router: Router,
    public config: FormioResourceConfig
  ) {
    super(service, route, router, config);
  }

  ngOnInit() {
    // Wait for the parent event to be loaded.
    this.service.resources['event'].resourceLoaded.then((event) => {

      // Wait for the participant form to load.
      this.service.formLoaded.then((form) => {

        // If they wish to have a custom registration form.
        if (event.data.registrationForm) {
          const registerForm = FormioUtils.getComponent(form.components, 'registration', true);
          registerForm.src = this.service.formFormio.projectUrl + '/' + event.data.registrationForm;
        }
      });
    });
  }
}
