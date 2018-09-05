import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormioModule } from 'angular-formio';
import { FormioAuth, FormioAuthRoutes } from 'angular-formio/auth';

export const authRoutes = FormioAuthRoutes({
  login: LoginComponent
});

@NgModule({
  imports: [
    CommonModule,
    FormioModule,
    FormioAuth,
    RouterModule.forChild(authRoutes)
  ],
  declarations: [LoginComponent]
})
export class AuthModule { }
