import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnChanges {
  @Input() products: Product[] = [];

  /**
   * Internal copy of products used for rendering and deletions.
   * When the input changes (category switched), this array is reset.
   */
  visibleProducts: Product[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['products']) {
      this.visibleProducts = [...(this.products ?? [])];
    }
  }

  handleDelete(productId: number): void {
    this.visibleProducts = this.visibleProducts.filter(
      (product) => product.id !== productId
    );
  }
}

