import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UxproductsService } from '../appServices/uxproducts.service';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.scss']
})
export class ManageProductsComponent implements OnInit {

  constructor(private _uxproducts: UxproductsService) { }
  @ViewChild('id') id: ElementRef;
  @ViewChild('name') name: ElementRef;
  @ViewChild('price') price: ElementRef;
  dataTitle = this._uxproducts.getDatatitle();
  products = []
  fetching = false;
  editMode: boolean = false;
  editIndex;

  ngOnInit(): void {
    this.onFetchProduct();
  }

  onAddProduct(id, name, price) {
    if (this.editMode) {
      this.products[this.editIndex] = {
        id: id.value,
        name: name.value,
        price: price.value
      }
      this.editMode=false;
    }
    else {
      this.products.push({
        id: id.value,
        name: name.value,
        price: price.value
      })
    }

this.onSaveProduct();
  }

  onFetchProduct() {
    this.fetching = true;
    this._uxproducts.getProducts().subscribe(
      (response) => {
        // console.log(response);
        const data = JSON.stringify(response);
        this.products = JSON.parse(data)
        this.fetching = false;
      },
      (err) => console.log(err)
    )
  }
  onSaveProduct() {
    this._uxproducts.saveProducts(this.products).subscribe(
      (response) => {
        console.log(response);

      },

      (err) => console.log(err)
    )
  }
  onDeleteProduct(id) {
    if (confirm('Do You want to delete this Product?')) {
      this.products.splice(id, 1);
      this.onSaveProduct();
    }

  }

  onEditProduct(index: number) {
    this.editMode = true;
    this.editIndex = index;
    this.id.nativeElement.value = this.products[index].id;
    this.name.nativeElement.value = this.products[index].name;
    this.price.nativeElement.value = this.products[index].price;

  }


}
