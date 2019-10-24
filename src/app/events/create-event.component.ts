import { EventService } from './shared/events.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    templateUrl:'./create-event.component.html' ,
    styles:[`
    em {float: right; color:red; padding-left :10px}
    .error input {background-color: #E3C3C5;}
    .error ::-webkit-input-placeholder {color:#999;}
    .error ::-moz-placeholder {color:#999;} 
    .error :-moz-placeholder {color:#999;} 
    .error ::-mz-input-placeholder {color:#999;} 
`]
})
export class CreateEventComponent {

    newEvent:any;

    constructor(private router: Router, private eventService:EventService) {
    }
    saveEvent(fromValues){
       this.eventService.saveEvent(fromValues);
       this.router.navigate(['/events']);
    }
    cancel(): void {
        this.router.navigate(['/events']);
    }
}