import { ForbiddenException, forwardRef, Inject, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BetService } from "src/bet/bet.service";
import { Product } from "src/product/entity/product.entity";
import { ProductService } from "src/product/product.service";
import { Repository } from "typeorm";
import { BidDto } from "./dto/bid.dto";
import { Bid } from "./entity/bid.entity";

@Injectable()
export class BidService{
    constructor(
        @InjectRepository(Bid)
        public bidRepository: Repository<Bid>,

        @Inject(forwardRef(() => BetService))
        private betService: BetService,

        private productService: ProductService,

    ){}

    async create(prods: string[], minPrice: number){
        let bid: Bid = new Bid()
        bid.isFinished = false
        bid.minPrice = minPrice
        let Products: Product[] = []

        await Promise.all(
            prods.map(async id => {
                Products.push(await this.productService.productRepository.findOne(id))
            })
        )
        bid.products = Products
        const bidId = (await this.bidRepository.save(bid)).id
        
        // Array.prototype.forEach.call(prods, async (id: string) => {
        //     let bid_product: Bid_Product = new Bid_Product()
        //     bid_product.bidId = bidId
        //     bid_product.productId = Number(id)
        //     await this.bid_ProductRepository.save(bid_product) 
        // });
        return {
            minPrice: bid.minPrice,
            proucts: Products.map(prod => prod.name)
        }
    }

    findAllBids(){ // have error
        return this.bidRepository.find({
            relations: ['products']
        })
    }


    async finishBid(id: string){
        
        let bid = await this.bidRepository.findOne(id)
        
        const bets = (await this.betService.betRepository.find({
            relations: ['user', 'bid']
        })).filter(bet => bet.bid.id == bid.id)
        if(bets.length == 0){
            throw new ForbiddenException('The auction could not be completed because there are no bids')
        }
        bid.isFinished = true
        bid.id = Number(id)
        this.bidRepository.update(id, bid)
        const winner = {
            username: bets[bets.length - 1].user.username,
            email: bets[bets.length - 1].user.email
        }
        return {
            winner: winner,
            price: bets[bets.length - 1].price
        }
    }
}