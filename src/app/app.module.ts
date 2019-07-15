import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormioModule, FormioAppConfig } from 'angular-formio';
import { FormManagerService, FormManagerConfig } from 'angular-formio/manager';
import { FormioAuthService, FormioAuthConfig } from 'angular-formio/auth';
import { FormioResources } from 'angular-formio/resource';
import { AuthConfig, AppConfig } from '../config';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';

import './components/CheckMatrix';
import {AuthGuardService} from './auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    HeroComponent
  ],
  imports: [
    BrowserModule,
    FormioModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: 'auth',
        loadChildren: './auth/auth.module#AuthModule'
      },
      {
        path: 'form',
        loadChildren: './form/form.module#FormModule',
        canActivate: [AuthGuardService]
      },
      {
        path: 'event',
        loadChildren: './event/event.module#EventModule',
        canActivate: [AuthGuardService]
      },
      {
        path: 'employee',
        loadChildren: './employee/employee.module#EmployeeModule',
        canActivate: [AuthGuardService]
      }
    ], {useHash: true})
  ],
  providers: [
    FormioResources,
    FormioAuthService,
    FormManagerService,
    AuthGuardService,
    {provide: FormManagerConfig, useValue: {
      tag: 'common'
    }},
    {provide: FormioAuthConfig, useValue: AuthConfig},
    {provide: FormioAppConfig, useValue: AppConfig}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
