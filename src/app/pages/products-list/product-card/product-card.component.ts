import { CartService } from './../../../services/cart.service';
import { Component, inject, input, signal } from '@angular/core';
import { Product } from '../../../models/products.model';
import { PrimaryButtonComponent } from '../../../components/primary-button/primary-button.component';


@Component({
  selector: 'app-product-card',
  imports: [PrimaryButtonComponent],
  template: `
    <div
      class=" bg-white shadow-md border rounded-xl p-6 flex flex-col items-center justify-between h-full hover:bg-slate-100 relative"
    >
      
      <img
        [src]="product().image"
        alt="Product Image"
        class="w-[200px] h-[100px] object-contain"
      />
      <div class="flex flex-col">
        <span class="text-md font-bold">
          {{ product().title }}
        </span>
        <span class="text-sd ">
          {{ product().price + ' MAD' }}
        </span>
        <app-primary-button label="Add to Cart" class="mt-3" (btnClicked)="cartService.addToCart(product())"/>
      </div>
      <span class="absolute top-2 right-2 text-sm font-bold" [class]="product().stock ? 'text-green-500' : 'text-red-500'">
        @if (product().stock) {
        {{ product().stock }} left } @else { Out of Stock }
      </span>
    </div>
  `,
  styles: ``,
})
export class ProductCardComponent {
  
  cartService = inject(CartService);
  product = input.required<Product>();
 

}
