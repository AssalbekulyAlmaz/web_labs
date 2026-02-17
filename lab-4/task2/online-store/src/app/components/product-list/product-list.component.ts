import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  // NOTE: Replace placeholder Kaspi links with real product URLs from kaspi.kz.
  products: Product[] = [
    {
      id: 1,
      name: 'Apple iPhone 15 128GB',
      description:
        'Қуатты A16 Bionic процессоры, тамаша OLED дисплей және ұзақ жұмыс істейтін батареясы бар жаңа буын iPhone.',
      price: 449990,
      rating: 4.8,
      image:
        'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=1200',
      images: [
        'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1200',
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-1/',
    },
    {
      id: 2,
      name: 'Samsung Galaxy S24',
      description:
        'Жоғары жарықтылығы бар Dynamic AMOLED 2X экраны және жасанды интеллектке негізделген жаңа мүмкіндіктер.',
      price: 399990,
      rating: 4.7,
      image:
        'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=1200',
      images: [
        'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg?auto=compress&cs=tinysrgb&w=1200',
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-2/',
    },
    {
      id: 3,
      name: 'Xiaomi Redmi Note 13 Pro',
      description:
        'Жоғары жаңарту жиілігі бар дисплей, үлкен аккумулятор және күнделікті қолдануға арналған тамаша камера.',
      price: 159990,
      rating: 4.6,
      image:
        'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1200',
      images: [
        'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=1200',
      ],
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-13-pro-3/',
    },
    {
      id: 4,
      name: 'Apple MacBook Air 13 M2',
      description:
        'Жіңішке әрі жеңіл корпуста қуатты M2 чипі мен ұзақ аккумуляторлы macOS ноутбугы.',
      price: 659990,
      rating: 4.9,
      image:
        'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1200',
      images: [
        'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/163130/laptop-notebook-macbook-apple-163130.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/374074/pexels-photo-374074.jpeg?auto=compress&cs=tinysrgb&w=1200',
      ],
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-m2-4/',
    },
    {
      id: 5,
      name: 'Sony WH-1000XM5 құлаққаптары',
      description:
        'Салмақсыз құрылым және нарықтағы үздік шуды басу функциясы бар сымсыз құлаққаптар.',
      price: 179990,
      rating: 4.8,
      image:
        'https://images.pexels.com/photos/3394664/pexels-photo-3394664.jpeg?auto=compress&cs=tinysrgb&w=1200',
      images: [
        'https://images.pexels.com/photos/3394664/pexels-photo-3394664.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/3394663/pexels-photo-3394663.jpeg?auto=compress&cs=tinysrgb&w=1200',
      ],
      link: 'https://kaspi.kz/shop/p/sony-wh-1000xm5-5/',
    },
    {
      id: 6,
      name: 'Apple AirPods Pro 2',
      description:
        'Adaptive Transparency режимі бар шуды басу функциясы және кеңістіктік дыбыс қолдайтын құлаққаптар.',
      price: 119990,
      rating: 4.7,
      image:
        'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=1200',
      images: [
        'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/373945/pexels-photo-373945.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/325153/pexels-photo-325153.jpeg?auto=compress&cs=tinysrgb&w=1200',
      ],
      link: 'https://kaspi.kz/shop/p/apple-airpods-pro-2-6/',
    },
    {
      id: 7,
      name: 'Samsung QLED 55" Smart TV',
      description:
        'Терең қара түстері мен қанық түстері бар QLED 4K теледидары, Smart TV функцияларымен.',
      price: 299990,
      rating: 4.5,
      image:
        'https://images.pexels.com/photos/1444416/pexels-photo-1444416.jpeg?auto=compress&cs=tinysrgb&w=1200',
      images: [
        'https://images.pexels.com/photos/1444416/pexels-photo-1444416.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/2754848/pexels-photo-2754848.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200',
      ],
      link: 'https://kaspi.kz/shop/p/samsung-qled-55-7/',
    },
    {
      id: 8,
      name: 'LG жуғыш машинасы 8 кг',
      description:
        'Инверторлық моторы бар, энергияны үнемдейтін және түрлі бағдарламалары бар кір жуғыш машина.',
      price: 199990,
      rating: 4.4,
      image:
        'https://images.pexels.com/photos/39630/washing-machine-laundry-wash-housework-39630.jpeg?auto=compress&cs=tinysrgb&w=1200',
      images: [
        'https://images.pexels.com/photos/39630/washing-machine-laundry-wash-housework-39630.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/1034400/pexels-photo-1034400.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/1586025/pexels-photo-1586025.jpeg?auto=compress&cs=tinysrgb&w=1200',
      ],
      link: 'https://kaspi.kz/shop/p/lg-washer-8kg-8/',
    },
    {
      id: 9,
      name: 'Dyson V15 сымсыз шаңсорғышы',
      description:
        'Жоғары сорғыш қуаты бар, батареямен жұмыс істейтін әмбебап сымсыз шаңсорғыш.',
      price: 299990,
      rating: 4.9,
      image:
        'https://images.pexels.com/photos/4008831/pexels-photo-4008831.jpeg?auto=compress&cs=tinysrgb&w=1200',
      images: [
        'https://images.pexels.com/photos/4008831/pexels-photo-4008831.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/4107249/pexels-photo-4107249.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/4099264/pexels-photo-4099264.jpeg?auto=compress&cs=tinysrgb&w=1200',
      ],
      link: 'https://kaspi.kz/shop/p/dyson-v15-9/',
    },
    {
      id: 10,
      name: 'Apple Watch Series 9',
      description:
        'Денсаулықты бақылау сенсорлары және жылдам чипі бар смарт сағат, iPhone-мен тамаша жұмыс істейді.',
      price: 219990,
      rating: 4.6,
      image:
        'https://images.pexels.com/photos/2774062/pexels-photo-2774062.jpeg?auto=compress&cs=tinysrgb&w=1200',
      images: [
        'https://images.pexels.com/photos/2774062/pexels-photo-2774062.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/2773940/pexels-photo-2773940.jpeg?auto=compress&cs=tinysrgb&w=1200',
      ],
      link: 'https://kaspi.kz/shop/p/apple-watch-series-9-10/',
    },
  ];
}

