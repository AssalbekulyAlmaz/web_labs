import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly categories: Category[] = [
    { id: 1, name: 'Smartphones' },
    { id: 2, name: 'Laptops' },
    { id: 3, name: 'Headphones' },
    { id: 4, name: 'Tablets' },
  ];

  // NOTE: For the real assignment, ensure all links below
  // point to actual product pages on kaspi.kz.
  private readonly products: Product[] = [
    // Smartphones
    {
      id: 1,
      name: 'Apple iPhone 15 128GB',
      description:
        'Қуатты A16 Bionic процессоры, OLED дисплей және ұзақ жұмыс істейтін батареясы бар жаңа буын смартфон.',
      price: 449_990,
      rating: 4.8,
      image:
        'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=1200',
      images: [
        'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=1200',
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-1/',
      categoryId: 1,
      likes: 0,
    },
    {
      id: 2,
      name: 'Samsung Galaxy S24 256GB',
      description:
        'Dynamic AMOLED 2X экраны және жасанды интеллектке негізделген жаңа мүмкіндіктері бар флагман.',
      price: 399_990,
      rating: 4.7,
      image:
        'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=1200',
      images: [
        'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg?auto=compress&cs=tinysrgb&w=1200',
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-256gb-2/',
      categoryId: 1,
      likes: 0,
    },
    {
      id: 3,
      name: 'Xiaomi Redmi Note 13 Pro',
      description:
        'Жоғары жаңарту жиілігі бар дисплей және үлкен аккумулятор күнделікті қолдануға арналған.',
      price: 159_990,
      rating: 4.6,
      image:
        'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1200',
      images: [
        'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=1200',
      ],
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-13-pro-3/',
      categoryId: 1,
      likes: 0,
    },
    {
      id: 4,
      name: 'Google Pixel 8 128GB',
      description:
        'Жақсартылған камера мүмкіндіктері және таза Android тәжірибесі бар смартфон.',
      price: 329_990,
      rating: 4.7,
      image:
        'https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg?auto=compress&cs=tinysrgb&w=1200',
      images: [
        'https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg?auto=compress&cs=tinysrgb&w=1200',
      ],
      link: 'https://kaspi.kz/shop/p/google-pixel-8-128gb-4/',
      categoryId: 1,
      likes: 0,
    },
    {
      id: 5,
      name: 'Samsung Galaxy A55',
      description:
        'Орта деңгейдегі өнімділік пен жақсы камерасы бар қолжетімді смартфон.',
      price: 149_990,
      rating: 4.5,
      image:
        'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=1200',
      images: [
        'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=1200',
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-a55-5g-5/',
      categoryId: 1,
      likes: 0,
    },

    // Laptops
    {
      id: 6,
      name: 'Apple MacBook Air 13 M2',
      description:
        'Жіңішке әрі жеңіл корпуста қуатты M2 чипі мен ұзақ аккумулятор.',
      price: 659_990,
      rating: 4.9,
      image:
        'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1200',
      images: [
        'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/374074/pexels-photo-374074.jpeg?auto=compress&cs=tinysrgb&w=1200',
      ],
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-m2-6/',
      categoryId: 2,
      likes: 0,
    },
    {
      id: 7,
      name: 'Apple MacBook Pro 14 M3',
      description:
        'Кәсіби жұмыстарға арналған жоғары өнімділік пен сапалы mini‑LED дисплей.',
      price: 999_990,
      rating: 4.9,
      image:
        'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1200',
      images: [
        'https://images.pexels.com/photos/163130/laptop-notebook-macbook-apple-163130.jpeg?auto=compress&cs=tinysrgb&w=1200',
      ],
      link: 'https://kaspi.kz/shop/p/apple-macbook-pro-14-m3-7/',
      categoryId: 2,
      likes: 0,
    },
    {
      id: 8,
      name: 'ASUS ROG Strix G16',
      description:
        'Ойынға арналған қуатты видеокарта мен жоғары жиілікті дисплейі бар ноутбук.',
      price: 749_990,
      rating: 4.8,
      image:
        'https://images.pexels.com/photos/374074/pexels-photo-374074.jpeg?auto=compress&cs=tinysrgb&w=1200',
      images: [
        'https://images.pexels.com/photos/374074/pexels-photo-374074.jpeg?auto=compress&cs=tinysrgb&w=1200',
      ],
      link: 'https://kaspi.kz/shop/p/asus-rog-strix-g16-8/',
      categoryId: 2,
      likes: 0,
    },
    {
      id: 9,
      name: 'Lenovo IdeaPad 5 15"',
      description:
        'Күнделікті оқу мен жұмысқа арналған сенімді және қолжетімді ноутбук.',
      price: 329_990,
      rating: 4.4,
      image:
        'https://images.pexels.com/photos/163130/laptop-notebook-macbook-apple-163130.jpeg?auto=compress&cs=tinysrgb&w=1200',
      images: [
        'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1200',
      ],
      link: 'https://kaspi.kz/shop/p/lenovo-ideapad-5-15-9/',
      categoryId: 2,
      likes: 0,
    },
    {
      id: 10,
      name: 'HP Pavilion 14',
      description:
        'Жұмыс пен мультимедиаға арналған стильді корпус пен теңгерімді конфигурация.',
      price: 299_990,
      rating: 4.3,
      image:
        'https://images.pexels.com/photos/374074/pexels-photo-374074.jpeg?auto=compress&cs=tinysrgb&w=1200',
      images: [
        'https://images.pexels.com/photos/374074/pexels-photo-374074.jpeg?auto=compress&cs=tinysrgb&w=1200',
      ],
      link: 'https://kaspi.kz/shop/p/hp-pavilion-14-10/',
      categoryId: 2,
      likes: 0,
    },

    // Headphones
    {
      id: 11,
      name: 'Sony WH-1000XM5',
      description:
        'Нарықтағы үздік шуды басу функциясы және сапалы дыбысы бар сымсыз құлаққаптар.',
      price: 179_990,
      rating: 4.8,
      image:
        'https://images.pexels.com/photos/3394664/pexels-photo-3394664.jpeg?auto=compress&cs=tinysrgb&w=1200',
      images: [
        'https://images.pexels.com/photos/3394664/pexels-photo-3394664.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg?auto=compress&cs=tinysrgb&w=1200',
      ],
      link: 'https://kaspi.kz/shop/p/sony-wh-1000xm5-11/',
      categoryId: 3,
      likes: 0,
    },
    {
      id: 12,
      name: 'Apple AirPods Pro 2',
      description:
        'Adaptive Transparency режимі бар шуды басу функциясы және кеңістіктік дыбысты қолдайтын құлаққаптар.',
      price: 119_990,
      rating: 4.7,
      image:
        'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=1200',
      images: [
        'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/373945/pexels-photo-373945.jpeg?auto=compress&cs=tinysrgb&w=1200',
      ],
      link: 'https://kaspi.kz/shop/p/apple-airpods-pro-2-12/',
      categoryId: 3,
      likes: 0,
    },
    {
      id: 13,
      name: 'Samsung Galaxy Buds2 Pro',
      description:
        'Қуатты шуды басу және Galaxy экожүйесімен терең интеграциясы бар TWS құлаққаптар.',
      price: 89_990,
      rating: 4.5,
      image:
        'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=1200',
      images: [
        'https://images.pexels.com/photos/325153/pexels-photo-325153.jpeg?auto=compress&cs=tinysrgb&w=1200',
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-buds2-pro-13/',
      categoryId: 3,
      likes: 0,
    },
    {
      id: 14,
      name: 'JBL Tune 770NC',
      description:
        'Ыңғайлы оверхед форм-фактор және тиімді шуды басу технологиясы бар құлаққаптар.',
      price: 69_990,
      rating: 4.4,
      image:
        'https://images.pexels.com/photos/3394664/pexels-photo-3394664.jpeg?auto=compress&cs=tinysrgb&w=1200',
      images: [
        'https://images.pexels.com/photos/3394664/pexels-photo-3394664.jpeg?auto=compress&cs=tinysrgb&w=1200',
      ],
      link: 'https://kaspi.kz/shop/p/jbl-tune-770nc-14/',
      categoryId: 3,
      likes: 0,
    },
    {
      id: 15,
      name: 'Logitech G Pro X Wireless',
      description:
        'Ойыншыларға арналған сапалы микрофоны және кеңістік дыбысы бар гарнитура.',
      price: 129_990,
      rating: 4.6,
      image:
        'https://images.pexels.com/photos/3394663/pexels-photo-3394663.jpeg?auto=compress&cs=tinysrgb&w=1200',
      images: [
        'https://images.pexels.com/photos/3394663/pexels-photo-3394663.jpeg?auto=compress&cs=tinysrgb&w=1200',
      ],
      link: 'https://kaspi.kz/shop/p/logitech-g-pro-x-wireless-15/',
      categoryId: 3,
      likes: 0,
    },

    // Tablets
    {
      id: 16,
      name: 'Apple iPad 10.9 (10th gen)',
      description:
        'Оқу, ойын және мультимедиаға арналған әмбебап планшет, Apple Pencil қолдайды.',
      price: 279_990,
      rating: 4.7,
      image:
        'https://images.pexels.com/photos/5081390/pexels-photo-5081390.jpeg?auto=compress&cs=tinysrgb&w=1200',
      images: [
        'https://images.pexels.com/photos/5081390/pexels-photo-5081390.jpeg?auto=compress&cs=tinysrgb&w=1200',
      ],
      link: 'https://kaspi.kz/shop/p/apple-ipad-10-9-10th-gen-16/',
      categoryId: 4,
      likes: 0,
    },
    {
      id: 17,
      name: 'Apple iPad Pro 11 M2',
      description:
        'Кәсіби қолданушыларға арналған өте жылдам M2 чипі және ProMotion дисплейі бар планшет.',
      price: 549_990,
      rating: 4.9,
      image:
        'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=1200',
      images: [
        'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=1200',
      ],
      link: 'https://kaspi.kz/shop/p/apple-ipad-pro-11-m2-17/',
      categoryId: 4,
      likes: 0,
    },
    {
      id: 18,
      name: 'Samsung Galaxy Tab S9',
      description:
        'S Pen қаламы және AMOLED дисплейі бар қуатты Android планшет.',
      price: 429_990,
      rating: 4.8,
      image:
        'https://images.pexels.com/photos/5082568/pexels-photo-5082568.jpeg?auto=compress&cs=tinysrgb&w=1200',
      images: [
        'https://images.pexels.com/photos/5082568/pexels-photo-5082568.jpeg?auto=compress&cs=tinysrgb&w=1200',
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-s9-18/',
      categoryId: 4,
      likes: 0,
    },
    {
      id: 19,
      name: 'Xiaomi Pad 6',
      description:
        'Жоғары жаңарту жиілігі бар дисплейі және өнімді чипі бар қолжетімді планшет.',
      price: 199_990,
      rating: 4.5,
      image:
        'https://images.pexels.com/photos/5081390/pexels-photo-5081390.jpeg?auto=compress&cs=tinysrgb&w=1200',
      images: [
        'https://images.pexels.com/photos/5081390/pexels-photo-5081390.jpeg?auto=compress&cs=tinysrgb&w=1200',
      ],
      link: 'https://kaspi.kz/shop/p/xiaomi-pad-6-19/',
      categoryId: 4,
      likes: 0,
    },
    {
      id: 20,
      name: 'Lenovo Tab P11',
      description:
        'Үйдегі мультимедиа мен онлайн сабақтарға арналған үлкен дисплейлі планшет.',
      price: 149_990,
      rating: 4.3,
      image:
        'https://images.pexels.com/photos/5081390/pexels-photo-5081390.jpeg?auto=compress&cs=tinysrgb&w=1200',
      images: [
        'https://images.pexels.com/photos/5081390/pexels-photo-5081390.jpeg?auto=compress&cs=tinysrgb&w=1200',
      ],
      link: 'https://kaspi.kz/shop/p/lenovo-tab-p11-20/',
      categoryId: 4,
      likes: 0,
    },
  ];

  getCategories(): Category[] {
    return this.categories;
  }

  getProductsByCategory(categoryId: number): Product[] {
    return this.products.filter((p) => p.categoryId === categoryId);
  }

  getAllProducts(): Product[] {
    return this.products;
  }
}

