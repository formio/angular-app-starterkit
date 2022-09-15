import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormioGrid } from '@formio/angular/grid';
import { FormManagerModule, FormManagerRoutes, FormManagerService, FormManagerConfig } from '@formio/angular/manager';

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
