import { ProductService } from "src/product/product.service";
import { User } from "src/user/entity/user.entity";
import { Repository } from "typeorm";
import { BetDto } from "./dto/bet.dto";
import { BidDto } from "./dto/bid.dto";
import { Bet } from "./entity/bet.entity";
import { Bid } from "./entity/bid.entity";
import { Bid_Product } from "./entity/bid_product";
export declare class BidService {
    private bidRepository;
    private betRepository;
    private productService;
    private bid_ProductRepository;
    constructor(bidRepository: Repository<Bid>, betRepository: Repository<Bet>, productService: ProductService, bid_ProductRepository: Repository<Bid_Product>);
    create(prods: string[], bidDto: BidDto): Promise<Bid>;
    findAllBids(): Promise<Bet[]>;
    findBetsForBid(bidId: string): Promise<Bet[]>;
    findMyBets(user: User): Promise<Bet[]>;
    makeABet(bidId: string, betDto: BetDto, user: User): Promise<void>;
    finishBid(id: string): Promise<string>;
}
