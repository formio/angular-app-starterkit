import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormioModule, FormioAppConfig } from 'ng2-formio';
import { FormioAuthService, FormioAuthConfig } from 'ng2-formio/auth';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main';
import { HomeComponent } from './components/home/home';
import { HeaderComponent } from './components/header/header';
import { HeroComponent } from './components/hero/hero';
import { FooterComponent } from './components/footer/footer';
import { FormioGrid } from 'ng2-formio/grid';
import { AppConfig, AuthConfig, AuthService } from '../config';

// Add a simple component to contain the Resources.
@Component({
  template: '<div class="container"><router-outlet></router-outlet></div>'
})
class ContainerComponent {}

@Component({
  template:
  '<div class="row">' +
    '<div class="col-md-4 col-md-offset-4">' +
      '<router-outlet></router-outlet>' +
    '</div>' +
  '</div>'
})
class AuthContainerComponent {}

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'auth',
    component: AuthContainerComponent,
    loadChildren: 'es6-promise-loader?,[name]!./auth/auth.module#AuthModule'
  },
  {
    path: 'event',
    component: ContainerComponent,
    loadChildren: 'es6-promise-loader?,[name]!./resources/event/event.module#EventResource'
  },
  {
    path: 'user',
    component: ContainerComponent,
    loadChildren: 'es6-promise-loader?,[name]!./resources/user/user.module#UserResource'
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    BrowserModule,
    FormioModule,
    FormioGrid,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    MainComponent,
    HomeComponent,
    HeaderComponent,
    HeroComponent,
    FooterComponent,
    ContainerComponent,
    AuthContainerComponent
  ],
  providers: [
    {provide: FormioAuthService, useValue: AuthService},
    {provide: FormioAppConfig, useValue: AppConfig},
    {provide: FormioAuthConfig, useValue: AuthConfig}
  ],
  bootstrap: [
    MainComponent
  ]
})
export class AppModule {}
