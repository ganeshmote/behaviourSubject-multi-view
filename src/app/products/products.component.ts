import { Component, OnInit } from '@angular/core';
import { GalleryItems } from '../appModel/gallery';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private gallery:GalleryItems) { }
  galleryImages:any;
  ngOnInit(): void {
    this.galleryImages=this.gallery.productImages;
  }

}
