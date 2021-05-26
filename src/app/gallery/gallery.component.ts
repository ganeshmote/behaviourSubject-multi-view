import { Component, OnInit } from '@angular/core';
import { GalleryItems } from '../appModel/gallery';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

 
  constructor(private gallery:GalleryItems) { }
  galleryImages:any;
  ngOnInit() {
    this.galleryImages=this.gallery.galleryImages;
    
  }

}
