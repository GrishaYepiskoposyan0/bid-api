import { User } from "src/user/entity/user.entity";
import { Bid } from "../entity/bid.entity";
export declare class BetDto {
    id: number;
    price: number;
    bid: Bid;
    user: User;
    datetime: string;
}
