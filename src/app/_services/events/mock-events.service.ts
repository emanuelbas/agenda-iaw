import { Injectable } from '@angular/core';
import { Evento } from '../../_model/Evento';
import { AbstractEventsService } from './abstract-events.service';

@Injectable({
  providedIn: 'root'
})
export class MockEventsService extends AbstractEventsService {

	events: Evento[];

	constructor(){
		super();
		this.loadEvents();
	}


	loadEvents(): void {
		this.events = [
  		new Evento(
  			'Evento 1', new(Date), 'cine','https://picsum.photos/800/600/?random',
	 'una coordenada', 'un lugar', ['#hashtag1', '#hashtag2'] , 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged'), 
  		new Evento(
  			'Evento 2', new(Date), 'cine','https://picsum.photos/800/600/?random',
	 'una coordenada', 'un lugar', ['#hashtag1','#hashtag2'], 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged'),
  		new Evento(
  			'Evento 3', new(Date), 'cine','https://picsum.photos/800/600/?random',
	 'una coordenada', 'un lugar', ['#hashtag1','#hashtag2'], 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged'),
  	
  	]
	};

	getEvents(): Promise<Evento[]> {
		return new Promise((resolve) => {
			resolve(this.events);
		});
	};

	removeEvent(event: Evento): Promise<Object> {

		var me = this;
		return new Promise((resolve) => {

			me.events = me.events.filter(obj => obj !== event);
			resolve();
		});
	};


	addEvent(event: Evento): Promise<Object> {
		return new Promise((resolve) => {

			this.events.push(event);
			resolve();
		});
	};


	updateEvent(event: Evento): Promise<Object> {
			return new Promise((resolve) => {

				this.events.some(storedEvent => {
					if (storedEvent.name == event.name){
					
						storedEvent.date = event.date;
						storedEvent.eventtype = event.eventtype;
						storedEvent.imagen = event.imagen;
						storedEvent.ubicacion = event.ubicacion;
						storedEvent.nombreLugar = event.nombreLugar;
						storedEvent.hashtags = event.hashtags;
						storedEvent.email = event.email;
						return true;
					}
				});
				resolve();
			});
	};



}
