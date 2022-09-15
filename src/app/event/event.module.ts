import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormioModule } from '@formio/angular';
import {
  FormioResource,
  FormioResourceConfig,
  FormioResourceService,
  FormioResourceIndexComponent,
  FormioResourceCreateComponent,
  FormioResourceEditComponent,
  FormioResourceDeleteComponent
} from '@formio/angular/resource';
import { EventViewComponent } from './event-view/event-view.component';
import { EventResourceComponent } from './event-resource/event-resource.component';

@NgModule({
  imports: [
    CommonModule,
    FormioModule,
    FormioResource,
    RouterModule.forChild([
      {
        path: '',
        component: FormioResourceIndexComponent
      },
      {
        path: 'new',
        component: FormioResourceCreateComponent
      },
      {
        path: ':id',
        component: EventResourceComponent,
        children: [
          {
            path: '',
            redirectTo: 'view',
            pathMatch: 'full'
          },
          {
            path: 'view',
            component: EventViewComponent
          },
          {
            path: 'edit',
            component: FormioResourceEditComponent
          },
          {
            path: 'delete',
            component: FormioResourceDeleteComponent
          },
          {
            path: 'participant',
            loadChildren: './participant/participant.module#ParticipantModule'
          }
        ]
      }
    ])
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
