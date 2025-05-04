import { Component , signal , inject , Injectable} from '@angular/core';
import { Product } from '../../models/products.model';
import { ProductCardComponent } from "./product-card/product-card.component";
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../../config.service.ts/config.service.component';
@Component({
  selector: 'app-products-list',
  imports: [ProductCardComponent  ],
  providers :[ HttpClient] ,
  template: `
  <div class="p-8 grid grid-cols-2 gap-4">
  @for (product of products(); track product.id) {
    <app-product-card [product]="product"/>
  }
  </div>
  `,
  styles: ``
})
export class ProductsListComponent {
  
  private configService = inject(ConfigService);

  products = signal<Product[]>([]); 
  constructor() {
    this.configService.getProducts().subscribe({
      next: (data) => this.products.set(data),
      error: (err) => console.error('Error fetching products:', err),
    });
  }
}
/*

products = signal<Product[]>(
  
   [   {
        id: 1,
        title: 'Casque Bluetooth',
        image: 'https://ma.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/49/989256/1.jpg?4459',
        price: 999.90,
        stock: 10,
      },
      {
        id: 2,
        title: 'Imprimante Laser',
        image: 'https://ma.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/05/027166/1.jpg?7085',
        price: 1355.49,
        stock: 20,
      },
      {
        id: 3,
        title: 'White LED',
        image: 'https://ma.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/21/581984/1.jpg?0985',
        price: 199.99,
        stock : 0 ,
      },
      
      {
        id: 4,
        title: 'XIAOMI Monitor',
        image: 'https://ma.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/88/921156/1.jpg?3828',
        price: 2499.99,
        stock: 5,
      },
      {
        id: 5,
        title: 'JBL headphones',
        image: 'https://ma.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/87/508846/1.jpg?5910',
        price: 249.99,
        stock: 5,
      },

      {
        id: 6,
        title: 'Interphone maison',
        image: 'https://ma.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/16/889704/1.jpg?6754',
        price: 699.99,
        stock: 0,
      },
      
     
  ]  ); */


