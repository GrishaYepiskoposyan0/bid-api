import { BidService } from "./bid.service";
import { BidDto } from "./dto/bid.dto";
export declare class BidController {
    private bidService;
    constructor(bidService: BidService);
    create(bid: BidDto): Promise<{
        minPrice: number;
        proucts: string[];
    }>;
    findAllBids(): Promise<import("./entity/bid.entity").Bid[]>;
    finish(id: string): Promise<{
        winner: {
            username: string;
            email: string;
        };
        price: number;
    }>;
}
