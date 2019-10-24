import { EventService } from './../shared/events.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable()
export class EventRouteActivator implements CanActivate{
    constructor(private eventService: EventService, private router: Router){

    }

    canActivate(route : ActivatedRouteSnapshot){
           const eventExist =  !!this.eventService.getEvent(+route.params['id']);
           if(!eventExist){
                this.router.navigate(['/404'])
           }
           return eventExist;
    }
}