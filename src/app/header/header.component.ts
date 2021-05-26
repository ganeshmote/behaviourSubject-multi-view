import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from '../appServices/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private _header: HeaderService,private router:Router) {
    /// for header contact Details
    this._header.headerContactDetails.subscribe(res => {
      this.headerContactDetails = res;
    });

    /// for headerNav

    this._header.headerNav.subscribe(res => {
      this.headerNav = res;
    });

    /// for headerNav

    this._header.goBackLink.subscribe(res => {
      this.goBackLink = res;
    });


    /// for headerLoginBlock

    this._header.headerLoginBlock.subscribe(res => {
      this.headerLoginBlock = res;
    });


    /// for sign in

    this._header.loggedInUser.subscribe(res => {
      this.loggedInUser = res;
    });

  }
  goBackLink;                 //for back link 
  headerNav;                  //for headerNav link 
  headerLoginBlock;           //for headerLoginBlock link 
  headerContactDetails;       //for headerNav
  loggedInUser;               //for headerNav link loggedInUser
  ngOnInit(): void {
  }
  onLogout(){
    this._header.loggedInUser.next("");
    this.router.navigate(['login'])
  }
}
