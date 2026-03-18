export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  rating: number;
  image: string;
  images: string[];
  link: string;
  /**
   * Identifier of the category this product belongs to.
   */
  categoryId: number;
  /**
   * Number of likes for this product.
   */
  likes: number;
}

