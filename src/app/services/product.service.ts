import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
   }
   getAllProducts() {
    let dataFromAPI = this.http.get<any>('http://itbs-backend.herokuapp.com/product/all')
    return dataFromAPI
  }
}
