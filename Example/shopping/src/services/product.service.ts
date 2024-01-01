import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient:HttpClient) { }

  getAll():Observable<Product[]>{
    return this.httpClient.get<Product[]>("http://localhost:3000/products")
  }
  getById(id:number){
    return this.httpClient.get<Product[]>("http://localhost:3000/products?id="+id)
  }
}
