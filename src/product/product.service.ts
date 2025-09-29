import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
    private products = [
        {
            id: 1,
            name: "product 001",
            price: 10
        },
        {
            id: 2,
            name: "product 002",
            price: 20
        },
        {
            id: 3,
            name: "product 003",
            price: 30
        }
    ];
}
