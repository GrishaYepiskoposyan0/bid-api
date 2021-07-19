import { User } from "src/user/entity/user.entity";
import { Repository } from "typeorm";
import { ProductDto } from "./dto/product.dto";
import { Product } from "./entity/product.entity";
export declare class ProductService {
    productRepository: Repository<Product>;
    constructor(productRepository: Repository<Product>);
    create(productDto: ProductDto, user: User): void;
    findOne(id: string): Promise<Product>;
    findAll(): Promise<Product[]>;
    update(id: string, productDto: ProductDto): void;
    remove(id: string): void;
}
