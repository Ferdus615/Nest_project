import { Controller, Get, Param, Query, Post, Body } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dtos/createProduct.dto';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}
  @Get('/')
  getAllProduct() {
    return this.productService.getAllProduct();
  }

  @Get('/search')
  findProductByPrice(@Query('minPrice') minPrice: string) {
    console.log('This is form /search', minPrice);
    return this.productService.findProductByPrice(minPrice);
  }

  @Get('/:id')
  getProductById(@Param('id') id: string) {
    const response = this.productService.getProductById(id);
    console.log('This is from /:id', response);
    return response;
  }

  @Post('/')
  createProduct(@Body() product: CreateProductDto) {
    return this.productService.createProduct(product);
  }
}
