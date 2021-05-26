import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { GalleryItems } from '../appModel/gallery';
import { HeaderService } from '../appServices/header.service';

@Component({
  selector: 'app-galleryitem',
  templateUrl: './galleryitem.component.html',
  styleUrls: ['./galleryitem.component.scss']
})
export class GalleryitemComponent implements OnInit,OnDestroy {

  constructor(
    private gallery: GalleryItems,
    private _activatedRoutes: ActivatedRoute,   //ActivatedRoute is a service
    private _header:HeaderService
  ) { }
  galleryImages: [];
  selectedItem;
  id;
  ngOnInit(): void {
    this._header.headerNav.next(false);
    this._header.goBackLink.next({text:"Back to Gallery",url:"/gallery"});
    this.galleryImages = this.gallery.galleryImages;
    
    this._activatedRoutes.params.subscribe((params: Params) => {
      this.id = params['id'];
    
      this.selectedItem = this.gallery.galleryImages[this.id-1];   //params is observable  
    })

  }
ngOnDestroy(){
  this._header.headerNav.next(true);
  this._header.goBackLink.next({text:"",url:""});
}


}
