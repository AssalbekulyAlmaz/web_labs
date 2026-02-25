import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css',
})
export class ProductItemComponent {
  product = input.required<Product>();
  delete = output<number>();

  like(): void {
    const current = this.product();
    if (!current) {
      return;
    }
    current.likes += 1;
  }

  onDelete(): void {
    const current = this.product();
    if (!current) {
      return;
    }
    this.delete.emit(current.id);
  }

  get whatsAppShareUrl(): string {
    const current = this.product();
    const text = `Check out this product: ${current.link}`;
    return `https://wa.me/?text=${encodeURIComponent(text)}`;
  }

  get telegramShareUrl(): string {
    const current = this.product();
    const url = current.link;
    const text = current.name;
    return `https://t.me/share/url?url=${encodeURIComponent(
      url
    )}&text=${encodeURIComponent(text)}`;
  }
}

