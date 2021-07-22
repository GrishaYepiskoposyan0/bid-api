import { ForbiddenException, forwardRef, Inject, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BidService } from "src/bid/bid.service";
import { User } from "src/user/entity/user.entity";
import { Repository } from "typeorm";
import { BetDto } from "./dto/bet.dto";
import { Bet } from "./entity/bet.entity";

@Injectable()
export class BetService {
    constructor(
        @InjectRepository(Bet)
        public betRepository: Repository<Bet>,
        @Inject(forwardRef(() => BidService))
        private bidService: BidService
    ){
    }

    async findBetsForBid(bidId: string){
        return (await this.betRepository.find({
            relations: ['user', 'bid']
        })).filter(bet => bet.bid.id == Number(bidId))
    }

    async findMyBets(user: User){
        const bets = (await this.betRepository.find({
            relations: ['user', 'bid']
        })).filter(bet => bet.user.id == user.id)
        return bets;
    }



    async makeABet(bidId: string ,price: number, user: User){
        const bid = await this.bidService.bidRepository.findOne(bidId)
        const bet: Bet = new Bet()
        bet.price = price
        const bets = (await this.betRepository.find({
            relations: ['user', 'bid']
        })).filter(bet => bet.bid.id == bid.id)
        if(!bid.isFinished){
            if(bets.length != 0){
                if(bets[bets.length - 1].price < price){
                    bet.datetime = new Date().toUTCString()
                    bet.bid = (await this.bidService.bidRepository.findOne(bidId))
                    bet.user = user
                    this.betRepository.save(bet)
                }
                else{
                    throw new ForbiddenException('You cannot make a bet with this price: ' + price
                    + '.\n The minimum bet you can use is: ' + bets[bets.length - 1].price + 1)
                }
            }
            else {
                if(bid.minPrice < bet.price){
                    bet.datetime = new Date().toUTCString()
                    bet.bid = (await this.bidService.bidRepository.findOne(bidId))
                    bet.user = user
                    this.betRepository.save(bet)
                }
                else{
                    throw new ForbiddenException('You cannot make a bet with this price: ' + price
                    + '.\n The minimum bet you can use is: ' + bid.minPrice + 1)
                }
            }
            
        }else{
            throw new NotFoundException('Bid is finished')
        }
        
    }
}