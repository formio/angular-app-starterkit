import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';
import { AppConfig } from '../../../config';
import {
  FormioResource,
  FormioResourceRoutes,
  FormioResourceConfig,
  FormioResourceService,
  FormioResourceComponent
} from 'ng2-formio/resource';

// provide our own Event resource page.
@Component({
  styles: [
    'ul.nav.nav-tabs { margin-bottom: 20px; }',
    '.resource-back-icon { font-size: 1.2em; padding: 0.6em; }'
  ],
  template: require('./event.html')
})
export class EventResourceComponent extends FormioResourceComponent {
  constructor(public service: FormioResourceService, public route: ActivatedRoute) {
    super(service, route);
  }
}

// add the Activity nested resource.
let eventResourceRoutes: Routes = FormioResourceRoutes({
  resource: EventResourceComponent
});
eventResourceRoutes[2].children.push({
  path: 'activity',
  loadChildren: 'es6-promise-loader?,[name]!../activity/activity.module#ActivityResource'
});

@NgModule({
  imports: [
    CommonModule,
    FormioResource,
    RouterModule.forChild(eventResourceRoutes)
  ],
  declarations: [
    EventResourceComponent
  ],
  providers: [
    FormioResourceService,
    {provide: FormioResourceConfig, useValue: {
      name: 'event',
      form: 'event'
    }}
  ]
})
export class EventResource {}
