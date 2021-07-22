import { User } from "src/user/entity/user.entity"
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Bid } from "src/bid/entity/bid.entity"


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