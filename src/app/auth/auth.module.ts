import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormioAuth, FormioAuthService, FormioAuthRoutes } from 'ng2-formio/auth';
import { AuthService } from '../../config';
@NgModule({
  imports: [
    FormioAuth,
    RouterModule.forChild(FormioAuthRoutes())
  ],
  providers: [
    {
      provide: FormioAuthService,
      useValue: AuthService
    }
  ]
})
export class AuthModule {}

