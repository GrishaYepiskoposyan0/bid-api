import { Body, Controller, Param, Post, Get, Req, Patch } from "@nestjs/common";
import { ApiBearerAuth } from "@nestjs/swagger";
import { Request } from "express";
import { BidService } from "./bid.service";
import { BetDto } from "./dto/bet.dto";
import { BidDto } from "./dto/bid.dto";
import { CreateBidDto } from "./dto/createBid.dto";

@Controller('bid')
@ApiBearerAuth()
export class BidController{
    constructor(
        private bidService: BidService
    ){}

    @Post()
    create(@Body() bid: CreateBidDto){
        return this.bidService.create(bid.productIds, bid.bidDto)
    }

    @Get('bet/:bid_id')
    findBetsForBid(@Param('bid_id') bidId: string){
        return this.bidService.findBetsForBid(bidId)
    }

    @Get('all_bids')
    findAllBids(){
        return this.bidService.findAllBids()
    }

    @Get('my_bets')
    findAllMine(@Req() req: Request){
        return this.bidService.findMyBets(req.user['user'])
    }

    @Post('bet/:bid_id')
    makeABet(@Param('bid_id') bidId: string, @Body() betDto: BetDto, @Req() req: Request){
        return this.bidService.makeABet(bidId ,betDto, req.user['user'])
    }
    
    @Patch('finishBid/:bidId')
    finish(@Param('bidId') id: string){
        return this.bidService.finishBid(id)
    }
}