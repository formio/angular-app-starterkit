import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormioModule } from '@formio/angular';
import { FormioAuth, FormioAuthRoutes } from '@formio/angular/auth';

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
