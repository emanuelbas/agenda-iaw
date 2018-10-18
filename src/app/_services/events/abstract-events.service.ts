import { Injectable } from '@angular/core';
import { Evento } from '../../_model/Evento';

@Injectable({
  providedIn: 'root'
})
export abstract class AbstractEventsService {

  currentEvent: Evento;
  constructor() { }

  getCurrentEvent(): Evento {
  	return this.currentEvent;
  }
  setCurrentItem(Event: Evento) {
		this.currentEvent = Event;
  };

	abstract getEvents(): Promise<Evento[]>;
	abstract removeEvent(event: Evento): Promise<Object>;
	abstract addEvent(event: Evento): Promise<Object>;
  abstract updateEvent(event: Evento): Promise<Object>;

}
