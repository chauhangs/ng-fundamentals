import { EventService } from './../events/shared/events.service';
import { AuthService } from './../user/auth.service';
import { Component } from '@angular/core';
import { ISpeed } from 'selenium-webdriver';
import { ISession } from '../events/shared/event.model';

@Component({
    selector: 'nav-bar',
    templateUrl: './navbar.component.html',
    styles: [`
        .nav.navbar-nav {font-size: 15 px;}
        #searchForm {margin-right: 100px;}
        @media (max-width:1200 px){#searchForm {display:none}}
        li > a.active { color : #F97924; }
        `]
})
export class NavBarComponent {

    searchTerm:string;
    matchingSessions:ISession[];
    constructor(public authService: AuthService, private eventService:EventService){
        
    }

    searchSessions(searchTerm:string){
        this.eventService.searchSessions(searchTerm).subscribe(
            (  sessions: ISession[]) => {
                this.matchingSessions = sessions;
            }
        )
        
    }

}