/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";

import { TypeOrmModule } from "@nestjs/typeorm";
import { Product } from "src/product/entity/product.entity";
import { ProductModule } from "src/product/product.module";
import { ProductService } from "src/product/product.service";
import { AuthModule } from "src/user/auth.module";
import { AuthService } from "src/user/auth.service";
import { User } from "src/user/entity/user.entity";
import { BidController } from "./bid.controller";
import { BidService } from "./bid.service";
import { Bid } from "./entity/bid.entity";
import { Bid_Product } from "./entity/bid_product"
import { Bet } from "./entity/bet.entity";

@Module({
    imports:[
        TypeOrmModule.forFeature([Bid, User, Product, Bid_Product, Bet]),
        AuthModule,
        ProductModule
    ],
    providers: [BidService, AuthService, ProductService],
    controllers: [BidController],

})
export class BidModule{

}