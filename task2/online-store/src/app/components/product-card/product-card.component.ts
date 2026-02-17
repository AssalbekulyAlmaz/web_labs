import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input() product!: Product;

  selectedImageIndex = 0;

  get selectedImage(): string {
    if (!this.product) {
      return '';
    }
    if (this.product.images && this.product.images.length > 0) {
      return this.product.images[this.selectedImageIndex] ?? this.product.images[0];
    }
    return this.product.image;
  }

  nextImage(): void {
    if (!this.product?.images?.length) {
      return;
    }
    this.selectedImageIndex =
      (this.selectedImageIndex + 1) % this.product.images.length;
  }

  prevImage(): void {
    if (!this.product?.images?.length) {
      return;
    }
    this.selectedImageIndex =
      (this.selectedImageIndex - 1 + this.product.images.length) %
      this.product.images.length;
  }

  selectImage(index: number): void {
    if (!this.product?.images?.length) {
      return;
    }
    this.selectedImageIndex = index;
  }

  get whatsAppShareUrl(): string {
    const text = `Check out this product: ${this.product.link}`;
    return `https://wa.me/?text=${encodeURIComponent(text)}`;
  }

  get telegramShareUrl(): string {
    const url = this.product.link;
    const text = this.product.name;
    return `https://t.me/share/url?url=${encodeURIComponent(
      url
    )}&text=${encodeURIComponent(text)}`;
  }
}

