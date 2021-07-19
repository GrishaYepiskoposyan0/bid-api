import { ForbiddenException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { exception } from "console";
import { Product } from "src/product/entity/product.entity";
import { ProductService } from "src/product/product.service";
import { User } from "src/user/entity/user.entity";
import { Repository } from "typeorm";
import { BetDto } from "./dto/bet.dto";
import { BidDto } from "./dto/bid.dto";
import { Bet } from "./entity/bet.entity";
import { Bid } from "./entity/bid.entity";
import { Bid_Product } from "./entity/bid_product";

@Injectable()
export class BidService{
    constructor(
        @InjectRepository(Bid)
        private bidRepository: Repository<Bid>,
        @InjectRepository(Bet)
        private betRepository: Repository<Bet>,
        private productService: ProductService,
        @InjectRepository(Bid_Product)
        private bid_ProductRepository: Repository<Bid_Product>
    ){}

    async create(prods: string[], bidDto: BidDto){
        let bid: Bid = new Bid()
        bid.isFinished = false
        bid.minPrice = bidDto.minPrice
        let Products: Product[] = []

        Array.prototype.forEach.call(prods, async id => {
            Products.push(await this.productService.productRepository.findOne(id))
        })
        bid.products = Products
        const bidId = (await this.bidRepository.save(bid)).id
        
        Array.prototype.forEach.call(prods, async (id: string) => {
            let bid_product: Bid_Product = new Bid_Product()
            bid_product.bidId = bidId
            bid_product.productId = Number(id)
            console.log(bid_product)
            await this.bid_ProductRepository.save(bid_product) 
        });
        return bid
    }

    findAllBids(){
        return this.betRepository.find({
            relations: ['user', 'bid']
        })
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

    async makeABet(bidId: string ,betDto: BetDto, user: User){
        const bid = await this.bidRepository.findOne(bidId)
        const bet = (await this.betRepository.find({
            relations: ['user', 'bid']
        })).filter(bet => bet.bid.id == bid.id)
        if(!bid.isFinished){
            if(bet.length != 0){
                if(bet[bet.length - 1].price < betDto.price){
                    betDto.datetime = new Date().toUTCString()
                    betDto.bid = (await this.bidRepository.findOne(bidId))
                    betDto.user = user
                    this.betRepository.save(betDto)
                }
                else{
                    throw new ForbiddenException('You cannot make a bet with this price: ' + betDto.price
                    + '.\n The minimum bet you can use is: ' + bet[bet.length - 1].price + 1)
                }
            }
            else {
                if(bid.minPrice < betDto.price){
                    betDto.datetime = new Date().toUTCString()
                    betDto.bid = (await this.bidRepository.findOne(bidId))
                    betDto.user = user
                    this.betRepository.save(betDto)
                }
                else{
                    throw new ForbiddenException('You cannot make a bet with this price: ' + betDto.price
                    + '.\n The minimum bet you can use is: ' + bid.minPrice + 1)
                }
            }
            
        }else{
            throw new NotFoundException('Bid is finished')
        }
        
    }

    async finishBid(id: string){
        let bid = await this.bidRepository.findOne(id)
        bid.isFinished = true
        bid.id = Number(id)
        this.bidRepository.update(id, bid)
        const bets = (await this.betRepository.find({
            relations: ['user', 'bid']
        })).filter(bet => bet.bid.id == bid.id)

        return `The bid ${id} was win ${bets[bets.length -1].user.username}`
    }
}