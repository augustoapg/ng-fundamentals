import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
  EventsListComponent,
  EventThumbnailComponent,
  UpvoteComponent,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,
  EventsListResolverService,
  CreateSessionComponent,
  SessionListComponent,
  DurationPipe,
  VoterService,
  LocationValidator,
  EventsResolverService
} from './events/index';

import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/navbar.component';
import {
  TOASTR_TOKEN,
  Toastr,
  CollapsibleWellComponent,
  JQ_TOKEN,
  SimpleModalComponent,
  ModalTriggerDirective
} from './common/index';
import { appRoutes } from './routes';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { Error404Component } from 'src/app/errors/404.component';
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

declare global {
  interface Window {
      toastr:any;
      $:any;
  }
}

const toastr: Toastr = window.toastr;
const jQuery = window.$;

@NgModule({
  declarations: [
    LocationValidator,
    ModalTriggerDirective,
    DurationPipe,
    UpvoteComponent,
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    SimpleModalComponent,
    NavBarComponent,
    SessionListComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    CollapsibleWellComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules}),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    EventService,
    { provide: JQ_TOKEN, useValue: jQuery },
    { provide: TOASTR_TOKEN, useValue: toastr },
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    },
    EventsListResolverService,
    AuthService,
    VoterService,
    EventsResolverService
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm('You have not saved this event, do you really want to cancel?');
  }
  return true;
}
