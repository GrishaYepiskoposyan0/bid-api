import { Product } from "src/product/entity/product.entity";
import { Bet } from "../entity/bet.entity";
export declare class BidDto {
    id: number;
    minPrice: number;
    isFinished: boolean;
    products: Product[];
    bets: Bet[];
}
