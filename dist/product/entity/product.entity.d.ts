import { Bid } from "src/bid/entity/bid.entity";
import { User } from "src/user/entity/user.entity";
export declare class Product {
    id: number;
    name: string;
    bids: Bid[];
    user: User;
}
