import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppConfig } from '../../../config';
import {
  FormioResource,
  FormioResourceRoutes,
  FormioResourceConfig,
  FormioResourceService
} from 'ng2-formio/resource';

let eventResourceRoutes: Routes = FormioResourceRoutes();
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
  providers: [
    FormioResourceService,
    {provide: FormioResourceConfig, useValue: {
      name: 'event',
      form: 'event'
    }}
  ]
})
export class EventResource {}
