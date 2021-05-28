import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.scss']
})
export class TemplateDrivenComponent implements OnInit {

  constructor() { }

  @ViewChild('myForm') myForm: NgForm;

  genders = [{ id: 1, value: 'Male' }, { id: 2, value: 'Female' }];
  defaultCourse = "Angular";
  defaultGender = "Female"
  username = "";
  submitted = false;
  formdata = {
    username: "",
    email: "",
    course: "",
    gender: "",
  }
  ngOnInit(): void {
  }
  onSubmit(myForm: NgForm) {
    this.submitted = true;
    this.formdata.username = this.myForm.value.userDetail.username;
    this.formdata.email = this.myForm.value.userDetail.email;
    this.formdata.course = this.myForm.value.course;
    this.formdata.gender = this.myForm.value.gender;
    this.myForm.reset();
  }

  setUsername() {
    // console.log("ganesh");
    // this.myForm.setValue({
    //   userDetail: {
    //     username: 'swaraj',
    //     email: ''
    //   },
    //   course: '',
    //   gender: 'Male'
    // })

    this.myForm.form.patchValue({
      userDetail: {
        username: "ganeshBhau"
      }
    })
  }
}
