import { async } from '@angular/core/testing';
import { CustomValidations } from '../../classes/custom.validations';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-user-reactive',
  templateUrl: './new-user-reactive.component.html',
  styleUrls: ['./new-user-reactive.component.css']
})
export class NewUserReactiveComponent implements OnInit {

  userForm: FormGroup;

  get name() {
    return this.userForm.get('name');
  }

  get username() {
    return this.userForm.get('username');
  }

  constructor() { }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      name: new FormControl('John Doe', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern('John Doe')
      ]),
      username: new FormControl('johndoe', null, CustomValidations.asyncUnique),
      email: new FormControl('john.doe@example.com'),
      phone: new FormControl('9876543210'),
      website: new FormControl('john.com'),
      address: new FormGroup({
        street: new FormControl('123 NE St'),
        suite: new FormControl('Suite 1400'),
        city: new FormControl('Believe'),
        zipcode: new FormControl('98004'),
        geo: new FormGroup({
          lat: new FormControl('123.34434'),
          lng: new FormControl('-12321.334'),
        }),
      }),
      company: new FormGroup({
        name: new FormControl('Beauty'),
        catchPhrase: new FormControl('See Wold Differently'),
        bs: new FormControl('A company that creates beautiful content for travel boards and hotel chains'),
      }),
      hobbies: new FormArray([]),
    });
  }

  addHobby() {
    (<FormArray>this.userForm.get('hobbies')).push(new FormControl(''));
  }

  deleteHobby(index: number) {
    (<FormArray>this.userForm.get('hobbies')).removeAt(index);
  }

  submit() {

  }

}
