import { EventRouteActivator } from './app/events/event-details/event-route-activator.service';
import { Routes } from '@angular/router'
import { EventDetailsComponent } from './app/events/event-details/event-details.component'
import { CreateEventComponent } from './app/events/create-event.component'
import { Error404Component } from './app/errors/404.component'
import { EventsListComponent } from './app/events/events-list.component';
import { CreateSessionComponent } from './app/events/event-details/create-session.component';

export const appRoutes: Routes = [
    { path: 'events/new', component: CreateEventComponent },
    { path: 'events', component: EventsListComponent },
    { path: 'events/:id', component: EventDetailsComponent, canActivate : [EventRouteActivator]},
    { path: 'events/session/new', component:  CreateSessionComponent },
    { path: '404', component: Error404Component },
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    { path: 'user', loadChildren: () =>  import('./app/user/user.module').then(mod => mod.UserModule)}
]
