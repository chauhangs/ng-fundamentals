import { ISession } from './../shared/event.model';
import { Component, Input, OnChanges } from '@angular/core';
import { filter } from 'minimatch';

@Component({
    selector: 'session-list',
    templateUrl: './session-list.component.html'
})
export class SessionListComponent implements OnChanges{
    @Input() sessions: ISession[];
    @Input() filteredSessions: ISession[];
    @Input() filterBy:string;

    ngOnChanges(): void {
       if(this.sessions){
           this.filterSessions(this.filterBy);
       }
    }

    filterSessions(filterBy: string) {
        if(filterBy === 'all'){
            this.filteredSessions = this.sessions.slice(0);
        }
        else{
            this.filteredSessions = this.sessions.filter(x => x.level.toLocaleLowerCase() === filterBy);
        }
    }
}