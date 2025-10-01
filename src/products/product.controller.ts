import {
  Controller,
  Get,
  Param,
  Query,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
  Patch,
  Delete,
  HttpCode,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dtos/createProduct.dto';
import { UpdateProductDto } from './dtos/updateProduct.dto';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @HttpCode(302)
  @Get('/')
  getAllProduct() {
    return this.productService.getAllProduct();
  }

  @HttpCode(302)
  @Get('/search')
  findProductByPrice(@Query('minPrice') minPrice: string) {
    console.log('This is form /search', minPrice);
    return this.productService.findProductByPrice(minPrice);
  }

  @HttpCode(302)
  @Get('/:id')
  getProductById(@Param('id') id: string) {
    const response = this.productService.getProductById(id);
    console.log('This is from /:id', response);
    return response;
  }

  @HttpCode(201)
  @Post('/')
  @UsePipes(new ValidationPipe({ whitelist: true }))
  createProduct(@Body() product: CreateProductDto) {
    return this.productService.createProduct(product);
  }

  @HttpCode(201)
  @Patch('/:id')
  @UsePipes(new ValidationPipe({ whitelist: true }))
  updateProduct(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    return this.productService.updateProduct(id, updateProductDto);
  }

  @HttpCode(200)
  @Delete('/:id')
  @UsePipes(new ValidationPipe({ whitelist: true }))
  deleteProduct(@Param('id') id: string) {
    return this.productService.deleteProduct(id);
  }
}
