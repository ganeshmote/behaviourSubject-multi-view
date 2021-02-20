import { Component, OnInit } from '@angular/core';
import {  HostListener, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent {}


  //   notAllowedName = ['nirmala', 'shubhangi'];
  //   genders = [{ id: 1, value:'Male' }, { id: 2, value:'Female' }];
  //   myReactiveForm: FormGroup;
  //   formStatus;
  //   constructor() { }
  //   ngOnInit() {
  //     this.myReactiveForm = new FormGroup({
  //       'userDetail': new FormGroup({
  //         'username': new FormControl(null, [Validators.required, this.naName.bind(this)]),
  //         'email': new FormControl(null, [Validators.required, Validators.email], this.naEmails),
  //       }),
  
  //       'course': new FormControl('Angular'),
  //       'password': new FormControl(null),
  //       'gende': new FormControl('Male'),
  //       'skills': new FormArray([
  //         new FormControl(null, Validators.required),
  
  //       ])
  //     });
  
  //     // this.myReactiveForm.valueChanges.subscribe(
  //     //   (value)=>console.log(value)
  
  //     // );
  
  //     this.myReactiveForm.statusChanges.subscribe(
  //       (status) => {
  //         // console.log(status)
  //         this.formStatus = status;
  //       }
  //     )
  //     setTimeout(() => {
  
  
  
  //       this.myReactiveForm.setValue({
  //         userDetail: {
  //           'username': 'ganesh',
  //           'email': 'abc@abc.com'
  //         },
  //         'course': 'Html',
  //         'password': 'abc',
  //         'gende': 'male',
  //         'skills': [
  //           'python'
  //         ]
  //       })
  //     }, 4000);
  //   }
  
  
  //   getControls() {
  //     return (this.myReactiveForm.get('skills') as FormArray).controls;
  //   }
  
  //   onAddSkills() {
  //     const control = new FormControl(null, Validators.required);
  
  //     (<FormArray>this.myReactiveForm.get('skills')).push(control)
  //   }
  
  //   onSubmit() {
  //     console.log(this.myReactiveForm);
  //     // this.myReactiveForm.reset({
  //     //   userDetail:{
  //     //     'username':'',
  //     //     'email':''
  //     //   },
  //     //   'course':'Angular',
  //     //   'password':'',
  //     //   'gende':'male',
  //     //   'skills':[
  //     //     ''
  //     //   ]
  //     // }
  
  
  //     // );
  //   }
  
  //   naName(control: FormControl) {
  //     if (this.notAllowedName.indexOf(control.value) !== -1) {
  //       return { 'nameIsNotAllowed': true }
  //     }
  //     return null;
  //   }
  
  //   //Async validator;
  //   naEmails(control: FormControl): Promise<any> | Observable<any> {
  //     const myResponse = new Promise<any>((resolve, reject) => {
  // setTimeout(()=>{
  //   if(control.value ==="moteganesh10@gmail.com"){
  // resolve=>({'emailnotAllowed':true})
  //   }
  //   else{
  //     resolve (null)
  //   }
  // },1500);
  
  //     })
  //     return myResponse
  
  
  //   }
  // }
  
