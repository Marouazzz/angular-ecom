import { Product } from '../models/products.model';
import { catchError, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {  inject, Injectable, signal } from '@angular/core';
@Injectable({ providedIn: 'root' })
export class ConfigService {
  private http = inject(HttpClient);

  getProducts() {
    return this.http.get<Product[]>('https://fakestoreapi.com/products/category/electronics').pipe(
      catchError(error => {
        console.error('Erreur :', error);
        return throwError(() => error);
      }) );}
  addProduct(product: Product) {
    return this.http.post<Product>('https://fakestoreapi.com/products', product);
  }
}
