import { Injectable, NotFoundException } from '@nestjs/common';
import { min } from 'rxjs';

@Injectable()
export class ProductService {
  private products = [
    {
      id: 1,
      name: 'product 001',
      price: 10,
    },
    {
      id: 2,
      name: 'product 002',
      price: 20,
    },
    {
      id: 3,
      name: 'product 003',
      price: 30,
    },
  ];

  getAllProduct() {
    return this.products;
  }

  getProductById(id: string) {
    const product = this.products.find((product) => product.id === Number(id));
    if (!product) {
      throw new NotFoundException(`The product with ${id} is not found!`);
    }

    return product;
  }

  findProductByPrice(minPrice: string) {
    console.log(minPrice);
    const productsPrice = this.products.filter(
      (product) => product.price >= Number(minPrice),
    );
    if (!productsPrice.length) {
      throw new NotFoundException(
        `There is no product above ${minPrice} price range!`,
      );
    }

    return productsPrice;
  }
}
