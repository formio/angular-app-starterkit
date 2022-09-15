import { Component } from '@angular/core';
import { FormioResourceViewComponent } from '@formio/angular/resource';

@Component({
  selector: 'app-event-view',
  templateUrl: './event-view.component.html',
  styleUrls: ['./event-view.component.scss']
})
export class EventViewComponent extends FormioResourceViewComponent {}
