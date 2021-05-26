import { Component, OnDestroy, OnInit } from '@angular/core';
import { HeaderService } from '../appServices/header.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit ,OnDestroy{

  constructor(private _header:HeaderService) { }

  ngOnInit(): void {
    this._header.headerContactDetails.next(true);
    this._header.headerLoginBlock.next(false);
  }
ngOnDestroy(){
  this._header.headerContactDetails.next(false);
  this._header.headerLoginBlock.next(true);
}
}
