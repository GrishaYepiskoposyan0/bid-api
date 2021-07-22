/* eslint-disable prettier/prettier */
import { forwardRef, Module } from "@nestjs/common";

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
import { BetService } from "src/bet/bet.service";
import { Bet } from "src/bet/entity/bet.entity";
import { BetModule } from "src/bet/bet.module";

@Module({
    imports:[
        TypeOrmModule.forFeature([Bid, User, Product, Bet]),
        AuthModule,
        ProductModule,
        forwardRef(() => BetModule),
    ],
    providers: [BidService, ProductService, BetService],
    controllers: [BidController],

})
export class BidModule{

}