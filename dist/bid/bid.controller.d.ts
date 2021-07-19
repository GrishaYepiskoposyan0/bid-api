import { Request } from "express";
import { BidService } from "./bid.service";
import { BetDto } from "./dto/bet.dto";
import { CreateBidDto } from "./dto/createBid.dto";
export declare class BidController {
    private bidService;
    constructor(bidService: BidService);
    create(bid: CreateBidDto): Promise<import("./entity/bid.entity").Bid>;
    findBetsForBid(bidId: string): Promise<import("./entity/bet.entity").Bet[]>;
    findAllBids(): Promise<import("./entity/bet.entity").Bet[]>;
    findAllMine(req: Request): Promise<import("./entity/bet.entity").Bet[]>;
    makeABet(bidId: string, betDto: BetDto, req: Request): Promise<void>;
    finish(id: string): Promise<string>;
}
