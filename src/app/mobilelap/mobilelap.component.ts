import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { GalleryItems } from '../appModel/gallery';
import { HeaderService } from '../appServices/header.service';

@Component({
  selector: 'app-mobilelap',
  templateUrl: './mobilelap.component.html',
  styleUrls: ['./mobilelap.component.scss']
})
export class MobilelapComponent implements OnInit {
  constructor(
    private gallery:GalleryItems,
    private _activatedRoutes: ActivatedRoute,   //ActivatedRoute is a service
    private _header:HeaderService,
  ) { }
  galleryImages: [];
  selectedItem;
  id;
  ngOnInit(): void {
    this._header.headerNav.next(false);
    this._header.goBackLink.next({text:"Back to Products",url:"/products"});
    this.galleryImages = this.gallery.productImages;
    
    this._activatedRoutes.params.subscribe((params: Params) => {
      this.id = params['id'];
    
      this.selectedItem = this.gallery.productImages[this.id-1];   //params is observable  
    })

  }
ngOnDestroy(){
  this._header.headerNav.next(true);
  this._header.goBackLink.next({text:"",url:""});
}


}
