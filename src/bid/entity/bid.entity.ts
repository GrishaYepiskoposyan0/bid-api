import { Bet } from "src/bet/entity/bet.entity";
import { Product } from "src/product/entity/product.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Bid{

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    minPrice: number

    @Column()
    isFinished: boolean

    @ManyToMany(() => Product)
    @JoinTable()
    products: Product[]

    @OneToMany(() => Bet, bet => bet.bid)
    bets: Bet[]
}