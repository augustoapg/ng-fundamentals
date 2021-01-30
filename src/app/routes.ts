import { Routes } from "@angular/router";
import { CreateEventComponent } from "./events/create-event.component";
import { EventDetailsComponent } from "./events/event-details/event-details.component";
import { EventRouteActivatorService } from "./events/event-details/event-route-activator.service";
import { EventsListResolverService } from "./events/events-list-resolver.service";
import { EventsListComponent } from "./events/events-list.component";
import { Error404Component } from "./errors/404.component";

export function lazyLoadUserModule() {
  return import('./user/user.module').then(module => module.UserModule)
}

export const appRoutes:Routes = [
  { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
  { path: 'events', component: EventsListComponent, resolve: {events: EventsListResolverService} },
  { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivatorService] },
  { path: '404', component: Error404Component },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  { path: 'user', loadChildren: lazyLoadUserModule }
]
