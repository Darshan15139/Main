import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pipe } from 'rxjs';
import {map} from 'rxjs/operators'
import { UserModel } from '../shared/Models/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  signUp(signupObj: UserModel) {
    throw new Error('Method not implemented.');
  }
  public loginAPIUrl : string = "https://localhost:44371/api/Login/";

  constructor(private _http : HttpClient) {
    // this.signUp(empObj : any){
    //   //return this._http.post<any>(this.loginAPIUrl+"signup",empObj)
    //   return this._http.post<any>(`${this.loginAPIUrl}signup`,empObj)
    // }
    // login(empObj:any){
    //   return this._http.post<any>(`${this.loginAPIUrl}login`,empObj)
    // }
  }
}
