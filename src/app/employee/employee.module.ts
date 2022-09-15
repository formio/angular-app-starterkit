import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  FormioResource,
  FormioResourceConfig,
  FormioResourceRoutes,
  FormioResourceService
} from '@formio/angular/resource';

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
      name: 'employee',
      form: 'employee'
    }}
  ]
})
export class EmployeeModule { }
