import { UserService } from 'src/app/services/user/user.service';
import { IUser } from 'src/app/interfaces/user';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  communicationModes: string[];
  genders: string[];
  userList: IUser[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.genders = [ 'Male', 'Female' ];
    this.communicationModes = [ 'Phone' , 'Email' ];
  }

  submit(userForm) {
    this.userService.addUserToFirebase(userForm.value);
    console.log("User Form Submitted");
  }

  getUsers() {
    this.userService.getUsersFromFirebase().snapshotChanges().forEach(usersSnapShot => {
      this.userList = [];
      usersSnapShot.forEach(userSnapshot => {
        let user = userSnapshot.payload.toJSON();
        user['$key'] = userSnapshot.key;
        this.userList.push(user as IUser);
      });
    });
  }

  updateUser(userForm: NgForm) {
    this.userList[1].name = userForm.value.name;
    this.userService.updateAUserOnFirebase(this.userList[1]);
  }

  deleteUser() {
    this.userService.deleteUserFromFirebase(this.userList[1].$key);
  }

}
