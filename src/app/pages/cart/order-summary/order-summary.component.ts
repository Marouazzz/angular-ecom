import { Component , inject , computed} from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { PrimaryButtonComponent } from '../../../components/primary-button/primary-button.component';

@Component({
  selector: 'app-order-summary',
  imports: [PrimaryButtonComponent],
  template: `
    <div class=" bg-slate-100 p-6 rounded-xl shadow-xl border " >
      <h2 class="text-2xl">Order Summary </h2>
        <div class="flex flex-col gap-4">
          <div class="flex gap-4">
            <span class="text-lg text-red-600 font-bold">Total</span>
            <span class="text-lg text-gray-900 font-bold ">{{ total() + ' MAD' }}</span>
          </div>
          <app-primary-button label="Proceed to chekout"/>
        </div>
    </div>

  `,
  styles: ``
})
export class OrderSummaryComponent {
  cartService = inject(CartService);
  total1 = computed(() => {
    let total = 0;
    for (const item of this.cartService.cart()) {
      total += item.price;
    }
    return parseFloat(total.toFixed(2));
  });

  total() {
    return this.total1();
  }
}
