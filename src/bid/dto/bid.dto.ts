import { ApiProperty } from "@nestjs/swagger";

export class BidDto{
    @ApiProperty({
        isArray: true
    })
    productIds: string[]

    @ApiProperty()
    minPrice: number
}