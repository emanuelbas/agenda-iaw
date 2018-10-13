import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventEditComponent } from './event-edit/event-edit.component';
import { EventViewComponent } from './event-view/event-view.component';
import { EventCreateComponent } from './event-create/event-create.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserViewComponent } from './user-view/user-view.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { ProducerRegistrationComponent } from './producer-registration/producer-registration.component';
import { ProducerViewComponent } from './producer-view/producer-view.component';
import { ProducerLoginComponent } from './producer-login/producer-login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AppRoutingModule } from './app-routing.module';

const routes: Routes = [
  { path: '', redirectTo: '/eventos', pathMatch: 'full' },
  { path: 'eventos', component: EventListComponent }, 
  { path: 'evento/:id', component: EventViewComponent }, 
  { path: 'registrate', component: UserRegistrationComponent },
  { path: 'publicar evento', component: EventCreateComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    UserRegistrationComponent,
    EventListComponent,
    EventEditComponent,
    EventViewComponent,
    EventCreateComponent,
    UserRegistrationComponent,
    UserViewComponent,
    UserLoginComponent,
    ProducerRegistrationComponent,
    ProducerViewComponent,
    ProducerLoginComponent,
    HeaderComponent,
    FooterComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
