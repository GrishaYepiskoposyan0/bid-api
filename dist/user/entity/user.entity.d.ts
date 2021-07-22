import { Product } from "src/product/entity/product.entity";
import { Bet } from "src/bet/entity/bet.entity";
export declare class User {
    id: number;
    username: string;
    role: string;
    email: string;
    password: string;
    bets: Bet[];
    products: Product[];
}
