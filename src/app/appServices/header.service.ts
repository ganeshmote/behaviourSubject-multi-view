import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor() { }
  goBackLink = new BehaviorSubject({text:"",url:""});               //for back link 
  headerContactDetails = new BehaviorSubject(false);  //for header Contact Details
  headerLoginBlock = new BehaviorSubject(true);
  headerNav = new BehaviorSubject(true);  //for header NavBar
  loggedInUser = new BehaviorSubject("");  //for sign in 
}