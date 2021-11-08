import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { loginData } from './LoginModel';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url ?: string = environment.baseUrl;
  constructor(private http:HttpClient) { }

  login(data : loginData){
    return this.http.post(`${this.url}/login`,data);
  }

  register(data : loginData){
    return this.http.post(`${this.url}/login`,data);
  }
}
