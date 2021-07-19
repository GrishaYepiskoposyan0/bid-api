/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/user/entity/user.entity";
import { Repository } from "typeorm";
import { ProductDto } from "./dto/product.dto";
import { Product } from "./entity/product.entity";

@Injectable()
export class ProductService{
    constructor(
        @InjectRepository(Product)
        public productRepository: Repository<Product>
    ){}
    create(productDto: ProductDto, user: User){
        productDto.user = user
        this.productRepository.save(productDto)
    }
    findOne(id: string){
        return this.productRepository.findOne(id)
    }
    findAll(){
        return this.productRepository.find()
    }
    update(id: string, productDto: ProductDto){
        this.productRepository.delete(id)
        productDto.id = Number(id)
        this.productRepository.save(productDto)
    }
    remove(id: string){
        this.productRepository.delete(id)
    }
}