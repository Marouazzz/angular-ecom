import { Component } from '@angular/core';

@Component({
  selector: 'app-fournisseurstest.ts',
  imports: [],
  providers: [{
    provide: FournisseurstestTsComponent,
    useClass: BetterFournisseurstestTsComponent ,
  }],
  template: `
    <p>
      fournisseurstest.ts works!
    </p>
  `,
  styles: ``
})
export class FournisseurstestTsComponent {

}
