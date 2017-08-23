import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppConfig } from '../../../config';
import {
  FormioResource,
  FormioResourceRoutes,
  FormioResourceConfig,
  FormioResourceService
} from 'angular-formio/resource';

@NgModule({
  imports: [
    CommonModule,
    FormioResource,
    RouterModule.forChild(FormioResourceRoutes())
  ],
  providers: [
    FormioResourceService,
    {provide: FormioResourceConfig, useValue: {
      name: 'activity',
      form: 'activity',
      parents: ['event']
    }}
  ]
})
export class ActivityResource {}
