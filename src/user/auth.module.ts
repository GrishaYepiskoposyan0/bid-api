/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt/dist/jwt.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Bet } from "src/bid/entity/bet.entity";
import { Product } from "src/product/entity/product.entity";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { User } from "./entity/user.entity";

@Module({
    imports: [
        JwtModule.register({
            secret: 'sectretKey',
            signOptions: {
                expiresIn: '1d',
            },
        }),
        TypeOrmModule.forFeature([User, Product, Bet])
    ],
    controllers: [AuthController],
    providers: [AuthService],
    exports: [JwtModule]
})
export class AuthModule{

}