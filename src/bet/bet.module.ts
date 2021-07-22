import { forwardRef, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { BidModule } from "src/bid/bid.module";
import { BidService } from "src/bid/bid.service";
import { Bid } from "src/bid/entity/bid.entity";
import { Product } from "src/product/entity/product.entity";
import { ProductModule } from "src/product/product.module";
import { ProductService } from "src/product/product.service";
import { BetController } from "./bet.controller";
import { BetService } from "./bet.service";
import { Bet } from "./entity/bet.entity";

@Module({
    imports: [
        TypeOrmModule.forFeature([Bet, Bid, Product]),
        forwardRef(() => BidModule),
        ProductModule
    ],
    controllers: [BetController],
    providers: [BetService, ProductService, BidService]
})
export class BetModule{

}