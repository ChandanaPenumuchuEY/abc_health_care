import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  baseServerUrl="https://localhost:44308/api/";
    registerUser(user:Array<String>){
        return this.http.post(this.baseServerUrl+"Users/CreateUser",{
          username:user[0],
          mail:user[1],
          contact:Number(user[2]),
          password:user[3]
        },{
          responseType:'text',
        });
    }
  
}
