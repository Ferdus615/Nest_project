import {
  IsInt,
  IsOptional,
  IsPositive,
  IsString,
  isString,
  MinLength,
} from 'class-validator';

export class UpdateProductDto {
  @IsOptional()
  @IsString()
  @MinLength(2)
  name?: string;

  @IsOptional()
  @IsInt()
  @IsPositive()
  price?: number;
}
