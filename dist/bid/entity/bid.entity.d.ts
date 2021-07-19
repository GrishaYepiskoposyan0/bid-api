import { Product } from "src/product/entity/product.entity";
import { Bet } from "./bet.entity";
export declare class Bid {
    id: number;
    minPrice: number;
    isFinished: boolean;
    products: Product[];
    bets: Bet[];
}
