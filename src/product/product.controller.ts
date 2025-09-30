import { Controller, Get, Param, Query } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}
  @Get('/')
  getAllProduct() {
    return this.productService.getAllProduct();
  }

  @Get('/:id')
  getProductById(@Param('id') id: string) {
    const response = this.productService.getProductById(id);
    console.log(response);
    return response;
  }

  @Get('/search')
  getProductByPrice(@Query('minPrice') minPrice: string) {
    return this.productService.getProductByPrice(minPrice);
  }
}
