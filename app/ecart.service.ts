import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { cartData } from './model';

@Injectable({
  providedIn: 'root'
})
export class EcartService {

  url ?: string = environment.baseUrl;
  constructor(private http:HttpClient) { }

  getData(){
    return this.http.get<Array<cartData>>(`${this.url}/product`);
  }
  getBookseByCategory(category:string){
    return this.http.get<Array<cartData>>(`${this.url}/product/?category=${category}`)
  }
  getBooksById(id:number){
    return this.http.get<cartData>(`${this.url}/product/?pid=${id}`)
  }
  getBookseByName(name:string){
    return this.http.get<Array<cartData>>(`${this.url}/product/?name=${name}&author=${name}`)
  }
}
