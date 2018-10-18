import { Injectable } from '@angular/core';
import { Evento } from '../../_model/evento';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AbstractEventsService } from './abstract-events.service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpEventsService extends AbstractEventsService {

	events: Evento[];
	url: string; // e.g. "http://localhost:3000/items";

	constructor(protected http: HttpClient){

		super();
		this.url = environment.backendUrl + "/events";
	}

	getEvents(): Promise<Evento[]> {
		return new Promise((resolve)  => {
			this.http.get<Evento[]>(this.url).subscribe(response => {
				var events = response.map((event) => new Evento(event.name, event.date, event.eventtype, event.imagen, event.ubicacion, event.nombreLugar, event.hashtags, event.email));
				resolve (events);
			})
		})
	};

	removeEvent(event: Evento): Promise<Object> {

		return this.http.delete(this.url + '/' + event.name).toPromise();
	};

	addEvent(event: Evento): Promise<Object> {
		return this.http.post(this.url, event).toPromise();
	};

	updateEvent(event: Evento): Promise<Object> {
		return this.http.put(this.url + '/' + event.name, event).toPromise();
	}
}
