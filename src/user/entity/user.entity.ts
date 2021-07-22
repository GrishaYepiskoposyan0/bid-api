import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "src/product/entity/product.entity";
import { Bet } from "src/bet/entity/bet.entity";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    username: string

    @Column()
    role: string
    
    @Column({unique: true})
    email: string

    @Column()
    password: string

    @OneToMany(() => Bet, bet => bet.user)
    bets: Bet[]

    @OneToMany(() => Product, product => product.user)
    products: Product[]
}