import { Component, inject } from '@angular/core';
import { PrimaryButtonComponent } from '../primary-button/primary-button.component';
import { CartService } from '../../services/cart.service';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [PrimaryButtonComponent, RouterLink],
  template: `
    <div
      class="bg-violet-400 shadow-md border rounded-xl p-6 flex gap-4 justify-between items-center"
    >
      <button routerLink="/" class="text-2xl font-bold text-fuchsia-800 ">ANG-STORE-LAR</button>
      <app-primary-button
        [label]="'Cart (' + cartService.cart().length + ')'"
        routerLink="/cart"
        
      >
      </app-primary-button>
    </div>
  `,
  styles: [],
})
export class HeaderComponent {
  cartService = inject(CartService);
}
