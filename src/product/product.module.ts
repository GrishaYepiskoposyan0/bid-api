/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Bid } from "src/bid/entity/bid.entity";
import { User } from "src/user/entity/user.entity";
import { Product } from "./entity/product.entity";
import { ProductController } from "./product.controller";
import { ProductService } from "./product.service";

@Module({
    imports:[
        TypeOrmModule.forFeature([Product, User, Bid])
    ],
    providers: [ProductService],
    controllers: [ProductController]
})
export class ProductModule{

}