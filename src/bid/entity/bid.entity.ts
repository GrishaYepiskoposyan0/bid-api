import { Product } from "src/product/entity/product.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Bet } from "./bet.entity";

@Entity()
export class Bid{

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    minPrice: number

    @Column()
    isFinished: boolean

    @ManyToMany(() => Product)
    @JoinColumn()
    products: Product[]

    @OneToMany(() => Bet, bet => bet.bid)
    bets: Bet[]
}