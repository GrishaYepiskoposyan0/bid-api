import { User } from "src/user/entity/user.entity"
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Bid } from "./bid.entity"

@Entity()
export class Bet{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    price: number

    @Column()
    datetime: string

    @ManyToOne(() => Bid, bid => bid.bets)
    bid: Bid

    @ManyToOne(() => User, user => user.bets)
    user: User

}