import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormioAuthModule, FormioAuthRoutes } from 'angular-formio/auth';
const authRoutes = FormioAuthRoutes();
@NgModule({
  imports: [
    FormioAuthModule,
    RouterModule.forChild(authRoutes)
  ]
})
export class AuthModule {}

