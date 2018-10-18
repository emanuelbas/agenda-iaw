import { Injectable } from '@angular/core';
import { Evento } from '../_model/Evento';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { AbstractEventsService } from './events/abstract-events.service';
import { MockEventsService } from './events/mock-events.service';
import { HttpEventsService } from './events/http-events.service';
import { HttpsEventsService } from './events/https-events.service';
import { AuthService } from './auth/auth.service';



@Injectable({
  providedIn: 'root'
})
export class ApiService {

	eventsStrategy: AbstractEventsService;

	constructor(http: HttpClient, auth: AuthService) {

		this.eventsStrategy = new MockEventsService; //MockEventsService HttpsEventsService(http, auth)
	}

	getCurrentEvent(): Evento {
		return this.eventsStrategy.getCurrentEvent();
	};
	setCurrentItem(event: Evento) {
		this.eventsStrategy.setCurrentItem(event);
	};
	getEvents(): Promise<Evento[]> {
		return this.eventsStrategy.getEvents();
	};
	removeEvent(event: Evento): Promise<Object> {
		return this.eventsStrategy.removeEvent(event);
	};
	addEvent(event: Evento): Promise<Object>{
		return this.eventsStrategy.addEvent(event);
	};
	updateEvent(event: Evento): Promise<Object>{
		return this.eventsStrategy.updateEvent(event);
};

}
