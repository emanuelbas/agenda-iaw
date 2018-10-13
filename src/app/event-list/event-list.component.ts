import { Component, OnInit } from '@angular/core';
import { Evento } from '../_model/Evento'

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  eventos : Evento[];
  constructor() {
  	this.eventos = [
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
   }

  ngOnInit() {
  }

}
