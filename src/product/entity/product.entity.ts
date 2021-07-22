import { Bid } from "src/bid/entity/bid.entity";
import { User } from "src/user/entity/user.entity";
import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number
    
    @Column()
    name: string

    @ManyToMany(() => Bid)
    bids: Bid[]

    @ManyToOne(() => User, user => user.products)
    user: User
}