import { ApiProperty } from "@nestjs/swagger"
import { Bid } from "src/bid/entity/bid.entity"
import { User } from "src/user/entity/user.entity"

export class ProductDto{
    @ApiProperty()
    id: number
    
    @ApiProperty()
    name: string

    @ApiProperty({
        isArray: true,
        type: Bid
    })
    bids: Bid[]

    @ApiProperty({
        type: User
    })
    user: User
}