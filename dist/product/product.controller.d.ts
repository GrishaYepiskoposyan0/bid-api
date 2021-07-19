import { ProductDto } from "./dto/product.dto";
import { ProductService } from "./product.service";
import { Request } from 'express';
export declare class ProductController {
    private productService;
    constructor(productService: ProductService);
    create(productDto: ProductDto, req: Request): void;
    delete(id: string): void;
    findOne(id: string): Promise<import("./entity/product.entity").Product>;
    findAll(): Promise<import("./entity/product.entity").Product[]>;
    update(id: string, productDto: ProductDto): void;
}
