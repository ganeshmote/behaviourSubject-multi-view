import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from '../appServices/header.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _header: HeaderService,private router:Router) { }
  loggedInUser;
  ngOnInit(): void {
  }

//  @HostListener("click") myclick(){
//   alert("i love you Nirmala");
// }

@HostListener("window:scroll",['$event'])myScrolling(){
  console.log('gneshNirmala');

}
  loggedIn(username, password) {
    var uName=username.value;
    var passWord=password.value;
    if (passWord=="123") {

      this._header.loggedInUser.next(uName);
      this.router.navigate(['home']);
    }
    else {
      alert("please fill correct Details")
    }
  }
}
