import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  imports: [],
  template: `
    <button  class="bg-violet-300 text-black font-bold w-full border px-5 py-2 rounded-xl shadow-md hover:bg-slate-500 opacity:5"  (click)="btnClicked.emit()">
        {{ label() }}
    </button>
  `,
  styles: ``,
})
export class PrimaryButtonComponent {
label = input('');
btnClicked = output();


handleButtonClick(){
  this.btnClicked.emit();
  // Add your button click logic here
}
}
