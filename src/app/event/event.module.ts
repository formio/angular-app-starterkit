import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormioModule } from 'angular-formio';
import {
  FormioResource,
  FormioResourceRoutes,
  FormioResourceConfig,
  FormioResourceService
} from 'angular-formio/resource';
import { EventViewComponent } from './event-view/event-view.component';
import { EventResourceComponent } from './event-resource/event-resource.component';
import { ParticipantModule } from './participant/participant.module';

const eventResourceRoutes: Routes = FormioResourceRoutes({
  view: EventViewComponent,
  resource: EventResourceComponent
});

eventResourceRoutes[2].children.push({
  path: 'participant',
  loadChildren: () => ParticipantModule
});

@NgModule({
  imports: [
    CommonModule,
    FormioModule,
    FormioResource,
    RouterModule.forChild(eventResourceRoutes)
  ],
  declarations: [EventViewComponent, EventResourceComponent],
  providers: [
    FormioResourceService,
    {
      provide: FormioResourceConfig,
      useValue: {
        name: 'event',
        form: 'event'
      }
    }
  ]
})
export class EventModule { }
