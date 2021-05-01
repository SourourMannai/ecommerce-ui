import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  /**
   * GET http://itbs-backend.herokuapp.com/category/all
   * POST http://itbs-backend.herokuapp.com/category/add
   * DELETE http://itbs-backend.herokuapp.com/category/delete/:id
   * 
   */
  constructor(private http: HttpClient) { }

  getAllCategories() {
    let dataFromAPI = this.http.get<any>('http://itbs-backend.herokuapp.com/category/all')
    return dataFromAPI
  }

}
