import { User } from "src/user/entity/user.entity";
import { Bid } from "./bid.entity";
export declare class Bet {
    id: number;
    price: number;
    datetime: string;
    bid: Bid;
    user: User;
}
