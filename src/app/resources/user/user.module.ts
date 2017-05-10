import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppConfig } from '../../../config';
import {
  FormioResource,
  FormioResourceRoutes,
  FormioResourceConfig,
  FormioResourceViewComponent,
  FormioResourceService
} from 'ng2-formio/resource';

/**
 * Override the FormioResourceViewComponent to provide our own template and business logic.
 *
 * Every component within the FormioResource component can be overridden by extending the base classes and providing
 * your own templates. This illustrates how that is done.
 */
@Component({
  template:
    '<div class="panel panel-default" *ngIf="service.resourceLoaded | async">' +
      '<div class="panel-heading">' +
        '<h3 class="panel-title">{{ service.resource.data.firstName }} {{ service.resource.data.lastName }}</h3>' +
      '</div>' +
      '<div class="panel-body">' +
        '<div class="well">' +
          '<p>This is a custom template for the user view.</p>' +
        '</div>' +
        '<table class="table table-striped table-bordered">' +
          '<thead>' +
            '<tr>' +
              '<th>Property</th>' +
              '<th>Value</th>' +
            '</tr>' +
          '</thead>' +
          '<tbody>' +
            '<tr><td>First Name</td><td>{{ service.resource.data.firstName }}</td></tr>' +
            '<tr><td>Last Name</td><td>{{ service.resource.data.lastName }}</td></tr>' +
            '<tr><td>Email</td><td>{{ service.resource.data.email }}</td></tr>' +
          '</tbody>' +
        '</table>' +
      '</div>' +
    '</div>'
})
export class UserViewComponent extends FormioResourceViewComponent {
  constructor(public service: FormioResourceService, public config: FormioResourceConfig) {
    super(service, config);
  }
}

@NgModule({
  imports: [
    CommonModule,
    FormioResource,
    RouterModule.forChild(FormioResourceRoutes({
      view: UserViewComponent
    }))
  ],
  providers: [
    FormioResourceService,
    {provide: FormioResourceConfig, useValue: {
      name: 'user',
      form: 'user'
    }}
  ],
  declarations: [
    UserViewComponent
  ]
})
export class UserResource {}

