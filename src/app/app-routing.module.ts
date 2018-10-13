import { RouterModule, Routes } from '@angular/router';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { EventListComponent } from './event-list/event-list.component';
import { NgModule } from '@angular/core';
import { EventCreateComponent } from './event-create/event-create.component';

const routes: Routes = [
{ path: '', redirectTo: '/home', pathMatch: 'full' },
{ path: 'home', component: EventListComponent },
{ path: 'registrate', component: UserRegistrationComponent },
{ path: 'inicia sesión', component: UserLoginComponent },
{ path: 'publicar evento', component: EventCreateComponent },
];

@NgModule({
imports: [ RouterModule.forRoot(routes) ],
exports: [ RouterModule ]
})
export class AppRoutingModule { }
