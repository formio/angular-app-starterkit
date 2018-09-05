import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormioGrid } from 'angular-formio/grid';
import { FormManagerModule, FormManagerRoutes, FormManagerService, FormManagerConfig } from 'angular-formio/manager';

@NgModule({
  imports: [
    CommonModule,
    FormioGrid,
    FormManagerModule,
    RouterModule.forChild(FormManagerRoutes())
  ],
  declarations: [],
  providers: [
    FormManagerService,
    {provide: FormManagerConfig, useValue: {
        tag: 'common'
      }}
  ]
})
export class FormModule { }
