import { CommonModule } from '@angular/common';
import { Component, computed, effect, signal } from '@angular/core';
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

  quantityEffect = effect(() => console.log("Latest Value is ", this.quantity()));
  multiplication = computed(() => this.quantity() * 3);
  onQuantityChanged(qty: number) {
    this.quantity.set(qty);
  }
}
