import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { CreateProductDto } from './dtos/createProduct.dto';
import { UpdateProductDto } from './dtos/updateProduct.dto';

@Injectable()
export class ProductService {
  private products = [
    {
      id: uuidv4(),
      name: 'product 001',
      price: 10,
    },
    {
      id: uuidv4(),
      name: 'product 002',
      price: 20,
    },
    {
      id: uuidv4(),
      name: 'product 003',
      price: 30,
    },
  ];

  getAllProduct() {
    return this.products;
  }

  getProductById(id: string) {
    const product = this.products.find((product) => product.id === id);
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

  createProduct(product: CreateProductDto) {
    const newProduct = {
      id: uuidv4(),
      ...product,
    };

    this.products.push(newProduct);
    return newProduct;
  }

  updateProduct(id: string, updateProductDto: UpdateProductDto) {
    const product = this.products.find((product) => product.id === id);
    if (!product) {
      throw new NotFoundException(
        `The product with the id:${id} is not found!`,
      );
    }

    if (updateProductDto.name) product.name = updateProductDto.name;
    if (updateProductDto.price) product.price = updateProductDto.price;

    return product;
  }

  deleteProduct(id: string) {
    const product = this.products.filter((poduct) => product.id !== id);

    if (!product) {
      throw new NotFoundException(
        `The product with the id:${id} id not found!`,
      );
    }

    return product;
  }
}
