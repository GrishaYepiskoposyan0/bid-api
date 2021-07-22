import { Bet } from "src/bet/entity/bet.entity";
import { Product } from "src/product/entity/product.entity";
export declare class Bid {
    id: number;
    minPrice: number;
    isFinished: boolean;
    products: Product[];
    bets: Bet[];
}
