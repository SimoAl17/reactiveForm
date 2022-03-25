import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { observable, Observable } from 'rxjs';

export class Gender {
  constructor(public gend: string) {

  }
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  genders = [
    new Gender('Male'),
    new Gender('Female'),
    new Gender('Other')
  ]

  profileForm = new FormGroup ({
    username: new FormControl(''),
    passrd: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    mail: new FormControl(''),
    phone: new FormControl(''),
    gender: new FormControl('')
  }) 



  @Output() submit: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.profileForm.value)
  }

  data = {username : "pippo",
    password: "pippo",
    firstName: "pippo",
    lastName: "pippo",
    mail: "pippo",
    phone: "pippo",
    gender: "pippo"};



    
}

