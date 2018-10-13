import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

	form: FormGroup;

	constructor(private fb:FormBuilder){
		this.form = fb.group({
			username: '',
			name: '',
			subname: '',
			email: '',
			password: '',
			passwordconfirm: ''
		})
	}	 

  ngOnInit() {
  }

}
