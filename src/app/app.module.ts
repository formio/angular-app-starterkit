import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormioModule, FormioAppConfig } from 'angular-formio';
import { FormManagerModule, FormManagerService, FormManagerConfig } from 'angular-formio/manager';
import { FormioAuth, FormioAuthService, FormioAuthConfig } from 'angular-formio/auth';
import { FormioResources } from 'angular-formio/resource';
import { AuthConfig, AppConfig } from '../config';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';

import { EventModule } from './event/event.module';
import { EmployeeModule } from './employee/employee.module';
import { LoginComponent } from './auth/login.component';

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
        component: HomeComponent
      },
      {
        path: 'auth',
        loadChildren: () => FormioAuth.forChild({
          login: LoginComponent
        })
      },
      {
        path: 'form',
        loadChildren: () => FormManagerModule.forChild()
      },
      {
        path: 'event',
        loadChildren: () => EventModule
      },
      {
        path: 'employee',
        loadChildren: () => EmployeeModule
      }
    ])
  ],
  providers: [
    FormioResources,
    FormioAuthService,
    FormManagerService,
    {provide: FormManagerConfig, useValue: {
      tag: 'common'
    }},
    {provide: FormioAuthConfig, useValue: AuthConfig},
    {provide: FormioAppConfig, useValue: AppConfig}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
