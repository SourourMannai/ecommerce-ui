import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  registerUser(user: any) {
    let dataFromAPI = this.http.post<any>("http://itbs-backend.herokuapp.com/user/register", user)
    return dataFromAPI
  }

  loginUser(user: any) {
    let dataFromAPI = this.http.post<any>("http://itbs-backend.herokuapp.com/user/login", user)
    return dataFromAPI
  }

}
