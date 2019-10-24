import { ModalTriggerDirective } from './common/modal-trigger.directive';
import { SimpleModelComponent } from './common/simple-model.component';
import { CollapsibleWellComponent } from './events/shared/collapsible-well.component';
import { SessionListComponent } from './events/event-details/session-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserModule } from './user/user.module';
import { CreateEventComponent } from './events/create-event.component';
import { appRoutes } from './../router';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { NavBarComponent } from './nav/navbar.component';
import { EventThumbnailComponent } from './events/event-thumnail.compoment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events/events-app.component';
import { EventService } from './events/shared/events.service';
import { TOASTR_TOKEN } from './common/toastr.service';
import { RouterModule } from '@angular/router';
import { Error404Component } from './errors/404.component';
import { EventRouteActivator } from './events/event-details/event-route-activator.service';
import { EventsListComponent } from './events/events-list.component';
import { AuthService } from './user/auth.service';
import { CreateSessionComponent } from './events/event-details/create-session.component';
import { JQ_TOKEN } from './common/jQuery.service';

declare let toastr: any;
declare let jQuery: any;

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    SimpleModelComponent,
    ModalTriggerDirective
  ],
  imports: [
    BrowserModule,
    UserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EventService, 
             {provide:TOASTR_TOKEN, useValue : toastr}, 
             {provide:JQ_TOKEN, useValue : jQuery},  
             EventRouteActivator,
            AuthService],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
