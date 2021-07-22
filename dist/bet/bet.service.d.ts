import { BidService } from "src/bid/bid.service";
import { User } from "src/user/entity/user.entity";
import { Repository } from "typeorm";
import { Bet } from "./entity/bet.entity";
export declare class BetService {
    betRepository: Repository<Bet>;
    private bidService;
    constructor(betRepository: Repository<Bet>, bidService: BidService);
    findBetsForBid(bidId: string): Promise<Bet[]>;
    findMyBets(user: User): Promise<Bet[]>;
    makeABet(bidId: string, price: number, user: User): Promise<void>;
}
