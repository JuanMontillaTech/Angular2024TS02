import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { Injectable } from '@angular/core';
import { IProduct } from './Interfaces/IProducts';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  apiurl = 'https://api.escuelajs.co/api/v1';
  http=inject(HttpClient);
  constructor() { }
  getAllProducts(){
    return this.http.get<IProduct[]>(this.apiurl+'/products');
  }
}
