import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient) { }
  apiurl = 'http://localhost:3000/user';
 
  GetAll() {
    return this._http.get(this.apiurl)
  }

  Getbycode(code: any) {
    return this._http.get(this.apiurl + '/' + code)
  }

  Proceedregister(inputdata: any) {
     return this._http.post(this.apiurl, inputdata)
  }

  Updateuser(code: any, inputdata: any) {
     return this._http.put(this.apiurl + '/' + code, inputdata) 
  }

  IsloggedIn(){
    return sessionStorage.getItem('username')!=null;  // returns true or false
  }

  GetUserrole(){
    return sessionStorage.getItem('userrole')!=null?sessionStorage.getItem('userrole')?.toString():'';
  }

}
