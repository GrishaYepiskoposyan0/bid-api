import { BetService } from "./bet.service";
import { BetDto } from "./dto/bet.dto";
import { Request } from "express";
export declare class BetController {
    private betService;
    constructor(betService: BetService);
    findBetsForBid(bidId: string): Promise<import("./entity/bet.entity").Bet[]>;
    findAllMine(req: Request): Promise<import("./entity/bet.entity").Bet[]>;
    makeABet(bidId: string, betDto: BetDto, req: Request): Promise<void>;
}
