import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.scss']
})
export class ManageUserComponent implements OnInit {
@ViewChild('userForm') userForm:NgForm;
  constructor() { }

  ngOnInit(): void {
  }

  onAddUser(userData:{name:string,technology:string}){

    console.log(userData);
  }

}
