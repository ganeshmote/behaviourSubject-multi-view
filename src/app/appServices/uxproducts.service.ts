import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UxproductsService {
  url = 'https://manageproducts-bedff-default-rtdb.firebaseio.com/products.json'
  private headers= new HttpHeaders({
    'Content-Type':'application/json'
  })
  constructor(private http: HttpClient) { }


  saveProducts(product: any[]) {
    // return this.http.post(this.url,product)
    return this.http.put(this.url, product,{headers:this.headers})
  }
  getProducts() {
    // return this.http.post(this.url,product)
    return this.http.get(this.url)
  }

  getDatatitle() {
    // return this.http.post(this.url,product)
    return this.http.get('https://manageproducts-bedff-default-rtdb.firebaseio.com/dataTitle.json')
  }
}
