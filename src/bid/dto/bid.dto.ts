import { ApiProperty } from "@nestjs/swagger";
import { Product } from "src/product/entity/product.entity";
import { Bet } from "../entity/bet.entity";

export class BidDto {
    @ApiProperty()
    id: number

    @ApiProperty()
    minPrice: number

    @ApiProperty({
        default: false
    })
    isFinished: boolean
    @ApiProperty({
        isArray: true
    })
    products: Product[]

    @ApiProperty({
        isArray: true
    })
    bets: Bet[]
}