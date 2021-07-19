import { User } from "src/user/entity/user.entity";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Bid } from "./bid.entity";

@Entity()
export class Bid_Product {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    bidId: number

    @Column()
    productId: number
}