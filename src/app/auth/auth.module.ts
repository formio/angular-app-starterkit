import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormioAuth, FormioAuthRoutes } from 'angular-formio/auth';

@NgModule({
  imports: [
    CommonModule,
    FormioAuth,
    RouterModule.forChild(FormioAuthRoutes())
  ],
  declarations: []
})
export class AuthModule { }
