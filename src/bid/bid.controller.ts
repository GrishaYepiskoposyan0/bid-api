import { Body, Controller, Param, Post, Get, Patch } from "@nestjs/common";
import { ApiBearerAuth } from "@nestjs/swagger";
import { BidService } from "./bid.service";
import { BidDto } from "./dto/bid.dto";

@Controller('bid')
@ApiBearerAuth()
export class BidController{
    constructor(
        private bidService: BidService
    ){}

    @Post()
    create(@Body() bid: BidDto){
        return this.bidService.create(bid.productIds, bid.minPrice)
    }
    
    @Get()
    findAllBids(){
        return this.bidService.findAllBids()
    }
    
    @Patch('finish/:bidId')
    finish(@Param('bidId') id: string){
        return this.bidService.finishBid(id)
    }
}