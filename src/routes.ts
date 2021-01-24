import { Routes } from "@angular/router";
import { CreateEventComponent } from "./app/events/create-event.component";
import { EventDetailsComponent } from "./app/events/event-details/event-details.component";
import { EventRouteActivatorService } from "./app/events/event-details/event-route-activator.service";
import { EventsListResolverService } from "./app/events/events-list-resolver.service";
import { EventsListComponent } from "./app/events/events-list.component";
import { Error404Component } from "./errors/404.component";

export const appRoutes:Routes = [
  { path: 'events', component: EventsListComponent, resolve: {events: EventsListResolverService} },
  { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
  { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivatorService] },
  { path: '404', component: Error404Component },
  { path: '', redirectTo: '/events', pathMatch: 'full' }
]
