import { CartService } from '../../../services/cart.service';
import { ButtonComponent } from '../../../components/button/button.component';
import { Product } from '../../../models/products.model';
import { Component, inject, input } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  imports: [ButtonComponent],
  template: `
    <div
      class="bg-white shadow-md border rounded-xl p-6 flex gap-4 items-center"
    >
      <img [src]="item().image" class="w-[50px] h-[50px] object-contain" />
      <div class="flex flex-col">
        <span class="block font-semibold">{{ item().title }}</span>
        <span class="text-gray-600"> {{   item().price + ' MAD' }}</span>
      </div>
      <div class="flex-1"></div>
      <app-button
        label="Remove"
        (btnClicked)="cartService.removeFromCart(item().id)"
      />
    </div>
  `,
  styles: ``,
})
export class CartItemComponent {
  item = input.required<Product>();

  cartService = inject(CartService);
}