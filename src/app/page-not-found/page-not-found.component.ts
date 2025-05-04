import { Component } from '@angular/core';
@Component({
  selector: 'app-page-not-found',
  imports: [],
  template: `
    <h2>Page Not Found</h2>
    <p>We couldn't find that page! Not even with x-ray vision.</p>
  `,
  styles: [`
    :host {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100vh;
      text-align: center;
      background-color: #f8f9fa;
    }
    h2 {
      color: #883A9C;
      font-size: 5rem;
      font-weight: bold;
    }
    p {
      font-size: 3rem;
      color: #333;
    } `]
})
export class PageNotFoundComponent {
}
