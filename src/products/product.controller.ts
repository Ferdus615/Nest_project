import {
  Controller,
  Get,
  Param,
  Query,
  Post,
  Body,
  Patch,
  Delete,
  HttpCode,
  UseGuards,
  Logger
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dtos/createProduct.dto';
import { UpdateProductDto } from './dtos/updateProduct.dto';
import { ApikeyGuard } from 'src/apikey/apikey.guard';

@UseGuards(ApikeyGuard)
@Controller('products')
export class ProductController {
  private readonly logger = new Logger(ProductController.name);
  constructor(private readonly productService: ProductService) {}

  @HttpCode(302)
  @Get('/')
  getAllProduct() {
    this.logger.log('Getting all products!')
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
  createProduct(@Body() product: CreateProductDto) {
    return this.productService.createProduct(product);
  }

  @HttpCode(201)
  @Patch('/:id')
  updateProduct(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    return this.productService.updateProduct(id, updateProductDto);
  }

  @HttpCode(200)
  @Delete('/:id')
  deleteProduct(@Param('id') id: string) {
    return this.productService.deleteProduct(id);
  }
}
