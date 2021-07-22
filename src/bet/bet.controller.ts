import { Body, Controller, Get, Param, Post, Req } from "@nestjs/common";
import { BetService } from "./bet.service";
import { BetDto } from "./dto/bet.dto";
import { Request } from "express"
import { ApiBearerAuth } from "@nestjs/swagger";

@Controller('bet')
@ApiBearerAuth()
export class BetController{
    constructor(
        private betService: BetService
    ){}

    @Get(':bid_id')
    findBetsForBid(@Param('bid_id') bidId: string){
        return this.betService.findBetsForBid(bidId)
    }

    @Get()
    findAllMine(@Req() req: Request){
        return this.betService.findMyBets(req.user['user'])
    }

    @Post(':bid_id')
    makeABet(@Param('bid_id') bidId: string, @Body() betDto: BetDto, @Req() req: Request){
        return this.betService.makeABet(bidId, betDto.price, req.user['user'])
    }
}