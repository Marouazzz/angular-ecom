import { Injectable, signal } from '@angular/core';
import { Product } from '../models/products.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart = signal<Product[]>([]);
  addToCart(product: Product) {
    if (product.stock && product.stock > 0) {
      this.cart.set([...this.cart(), { ...product, stock: product.stock - 1 }]);
    } else {
      console.warn('Product is out of stock and cannot be added to the cart.');
    }
  }
  removeFromCart(id : number) {
    this.cart.set(this.cart().filter((p) => p.id !== id));
  }

  constructor() {}
}
