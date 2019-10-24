import { IEvent, ISession } from './../shared/event.model';
import { EventService } from '../shared/events.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'event-details',
    templateUrl: './event-details.component.html',
    styles: [`
            .container { padding-left:20px; padding-right: 20px;}
            .event-image {height:100px;}
    `]
})
export class EventDetailsComponent implements OnInit {
    event: IEvent;
    addMode:boolean = false;
    filterBy:string = 'all';
    constructor(private eventService: EventService, private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.params.forEach((params:Params) =>{
            this.event = this.eventService.getEvent((+params['id']));
            this.addMode = false;
        })
    }

    addSession(){
        this.addMode = !this.addMode;
    }

    saveSession(session:ISession){
        this.event.sessions.push(session);
        this.addMode = !this.addMode;
    }

    cancelAddSession(cancelled:boolean){
        this.addMode = !this.addMode;
    }

}
