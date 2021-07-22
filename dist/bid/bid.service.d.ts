import { BetService } from "src/bet/bet.service";
import { ProductService } from "src/product/product.service";
import { Repository } from "typeorm";
import { Bid } from "./entity/bid.entity";
export declare class BidService {
    bidRepository: Repository<Bid>;
    private betService;
    private productService;
    constructor(bidRepository: Repository<Bid>, betService: BetService, productService: ProductService);
    create(prods: string[], minPrice: number): Promise<{
        minPrice: number;
        proucts: string[];
    }>;
    findAllBids(): Promise<Bid[]>;
    finishBid(id: string): Promise<{
        winner: {
            username: string;
            email: string;
        };
        price: number;
    }>;
}
