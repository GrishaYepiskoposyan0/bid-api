import { ApiProperty } from "@nestjs/swagger";
import { BidDto } from "./bid.dto";


export class CreateBidDto{
    @ApiProperty({
        isArray: true
    })
    productIds: string[]

    @ApiProperty({
        type: BidDto
    })
    bidDto: BidDto
}