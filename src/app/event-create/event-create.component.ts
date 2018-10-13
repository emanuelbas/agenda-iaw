import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.css']
})
export class EventCreateComponent implements OnInit {

  form:FormGroup;
  constructor(private fb:FormBuilder){
		this.form = fb.group({
			name: '',
			date: '',
			eventtype: '',
			imagen: '',
			ubicacion: '',
			nombreLugar: '',
			hashtags: '',
			email: ''
		})
	}	 

  ngOnInit() {
  }

}
