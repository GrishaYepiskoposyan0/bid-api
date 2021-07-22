import { ApiProperty } from "@nestjs/swagger";
import { User } from "src/user/entity/user.entity";
import { Bid } from "../../bid/entity/bid.entity";

export class BetDto {
    @ApiProperty()
    price: number
}