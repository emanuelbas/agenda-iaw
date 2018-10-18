import { Injectable } from '@angular/core';
import { HttpEventsService } from './http-events.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Evento } from '../../_model/evento';
import { map } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class HttpsEventsService extends HttpEventsService{

	constructor(http: HttpClient, private auth: AuthService){
		super(http);
	}

	getHeadersWith(token){
		return {
			headers: new HttpHeaders({
				'Content-Type': 'aplication/json',
				'Authorization': token
			})
		}
	}

	getCurrentToken(){
		return this.auth.getCurrentSession().getToken()
	}

	getEvents(): Promise<Evento[]>{
		return new Promise ((resolve )=> {
			this.http.get<Evento[]>(this.url, this.getHeadersWith(this.getCurrentToken())).subscribe(response => {
				var events = response.map((event) => new Evento(event.name, event.date, event.eventtype, event.imagen, event.ubicacion, event.nombreLugar, event.hashtags, event.email ));
				resolve (events);
			});
		});
	};

	removeEvent(event: Evento){
		return this.http.delete(this.url + '/' + event.name, this.getHeadersWith(this.getCurrentToken())).toPromise();
	};

	addEvent(event: Evento): Promise<Object> {
		return this.http.post(this.url, event, this.getHeadersWith(this.getCurrentToken())).toPromise();
	};

	updateEvent(event: Evento): Promise<Object> {
		return this.http.put(this.url + '/' + event.name, event, this.getHeadersWith(this.getCurrentToken())).toPromise();
	}

}
