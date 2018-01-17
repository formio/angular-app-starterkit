import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormioModule } from 'angular-formio';
import {
  FormioResource,
  FormioResourceRoutes,
  FormioResourceConfig,
  FormioResourceService
} from 'angular-formio/resource';
import { ParticipantCreateComponent } from './participant-create/participant-create.component';

@NgModule({
  imports: [
    CommonModule,
    FormioModule,
    FormioResource,
    RouterModule.forChild(FormioResourceRoutes({
      create: ParticipantCreateComponent
    }))
  ],
  declarations: [ParticipantCreateComponent],
  providers: [
    FormioResourceService,
    {
      provide: FormioResourceConfig,
      useValue: {
        name: 'participant',
        form: 'participant',
        parents: ['event']
      }
    }
  ]
})
export class ParticipantModule { }
