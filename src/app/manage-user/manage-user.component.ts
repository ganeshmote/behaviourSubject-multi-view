import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { map } from 'rxjs/operators'
import { User } from './user.model';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.scss']
})
export class ManageUserComponent implements OnInit {
  @ViewChild('userForm') userForm: NgForm;
  url = 'https://manageproducts-bedff-default-rtdb.firebaseio.com/users.json'
  users = []
  editMode: boolean = false;
  editUserId;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchUser();
  }

  onAddUser(userData: User) {
    if (this.userForm.valid) {
      if (this.editMode) {
        this.http.put('https://manageproducts-bedff-default-rtdb.firebaseio.com/users/' + this.editUserId + '.json',userData).subscribe(
          (res) => {
            console.log(res)
            this.fetchUser();
          }
        )
      }
      else {
        this.users.push(userData)
        console.log(userData);
        this.http.post<User>(this.url, userData).subscribe(
          (response) => console.log(response),
          (err) => console.log(err))
      }

    }
    else {
      let key = Object.keys(this.userForm.controls);
    }
  }

  fetchUser() {
    this.http.get<User>(this.url)
      .pipe(map(resdata => {
        console.log(resdata)
        const userArray = [];
        for (const key in resdata) {
          if (resdata.hasOwnProperty(key)) {
            userArray.push({ userId: key, ...resdata[key] })
          }
        }

        return userArray
      }))
      .subscribe(
        (resUser) => {
          this.users = resUser;
        }
      )
  }


  onEditUser(userId, index) {
    this.editUserId = userId;
    this.editMode = true;
    console.log(this.users[index]);
    this.userForm.setValue(
      {
        name: this.users[index].name,
        technology: this.users[index].technology
      }
    )
  }

  onDeleteUser(userId) {
    if (confirm('Do you want to delete this user!')) {
      this.http.delete('https://manageproducts-bedff-default-rtdb.firebaseio.com/users/' + userId + '.json').subscribe(
        (res) => {
          this.fetchUser();
        }
      )
    }
  }

}
