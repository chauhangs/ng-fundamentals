import { IEvent } from './shared/event.model';
import { Component, Input } from '@angular/core';

@Component({
    selector: "event-thumbnail",
    template: `
        <div [routerLink]="['/events', event.id]"
            class="well hoverwell thumbnail">
        <h2>{{event.name | uppercase }}</h2>
        <div>Date : {{event.date | date }}</div>
        <div>Time : {{event.time}}</div>
        <div>Price : {{event.price | currency}}</div>
        <div>
            <span>Location: {{event.location.address}}</span>
            <span>&nbsp;</span>
            <span>{{event.location.city}}, {{event.location.country}}</span>
        </div>
    `
})
export class EventThumbnailComponent {
    @Input() event: IEvent;
}