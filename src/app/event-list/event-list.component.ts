import { Component, OnInit } from '@angular/core';
import { Evento } from '../_model/Evento';
import { ApiService } from '../_services/api.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

import { MockEventsService } from '../_services/events/mock-events.service';


@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  events : Evento[];
  static instance: EventListComponent;

  constructor(private service: ApiService, private router: Router) { /*private service: HttpItemService*/

    this.updateLocalEvents();
  }

  updateLocalEvents(){
    console.log("Updating events");
    this.service.getEvents().then(events => this.events = events);
  }

  ngOnInit() {
  }

}
