import { ApiProperty } from "@nestjs/swagger";
import { User } from "src/user/entity/user.entity";
import { Bid } from "../entity/bid.entity";

export class BetDto {
    @ApiProperty()
    id: number

    @ApiProperty()
    price: number

    @ApiProperty({
        type: Bid
    })
    bid: Bid

    @ApiProperty({
        type: User
    })
    user: User

    @ApiProperty()
    datetime: string
}