import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  FormioResource,
  FormioResourceConfig,
  FormioResourceRoutes,
  FormioResourceService
} from 'angular-formio/resource';

@NgModule({
  imports: [
    CommonModule,
    FormioResource,
    RouterModule.forChild(FormioResourceRoutes())
  ],
  declarations: [],
  providers: [
    FormioResourceService,
    {provide: FormioResourceConfig, useValue: {
      name: 'user',
      form: 'user'
    }}
  ]
})
export class UserModule { }
