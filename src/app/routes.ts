import { Routes } from "@angular/router";
import { Error404Component } from "./errors/404.component";
import {
  CreateEventComponent,
  EventDetailsComponent,
  EventsListResolverService,
  EventsListComponent,
  CreateSessionComponent,
  EventsResolverService
} from './events/index';

export function lazyLoadUserModule() {
  return import('./user/user.module').then(module => module.UserModule)
}

export const appRoutes:Routes = [
  { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
  { path: 'events', component: EventsListComponent, resolve: {events: EventsListResolverService} },
  { path: 'events/:id', component: EventDetailsComponent, resolve: {event: EventsResolverService} },
  { path: 'events/session/new', component: CreateSessionComponent },
  { path: '404', component: Error404Component },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  { path: 'user', loadChildren: './user/user.module#UserModule' }
]
