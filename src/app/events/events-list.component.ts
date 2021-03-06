import { IEvent } from './shared/event.model';
import { EventService } from './shared/events.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'events-list',
  template: `
    <div>
        <h1>Upcoming Angular Events</h1> 
        <hr>
        <div class="row">
            <div class="col-md-5" *ngFor="let event of events">
                <event-thumbnail [event]="event"></event-thumbnail>
            </div>
        </div>
    </div>
        `
})
export class EventsListComponent implements OnInit {
  events: IEvent[];
  constructor(private eventService: EventService) {

  }

  ngOnInit() {
    this.events = this.eventService.getEvents();
  }

}
