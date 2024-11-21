import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-signals';
  quantity = signal<number>(1);
  qtyAvailable = signal<number[]>([1, 2, 3, 4]);

  onQuantityChanged(qty: number) {
    this.quantity.set(qty);
  }
}
