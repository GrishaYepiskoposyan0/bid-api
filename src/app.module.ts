import { MiddlewareConsumer, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BidController } from './bid/bid.controller';
import { BidModule } from './bid/bid.module';
import { Bet } from './bid/entity/bet.entity';
import { Bid } from './bid/entity/bid.entity';
import { Bid_Product } from './bid/entity/bid_product';
import { AuthorizedMiddleware } from './middleware/authorized.middleware';
import { Product } from './product/entity/product.entity';
import { ProductController } from './product/product.controller';
import { ProductModule } from './product/product.module';
import { AuthModule } from './user/auth.module';
import { User } from './user/entity/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'grish2003',
      database: 'biddb',
      entities: [User, Bid, Product, Bid_Product, Bet],
      synchronize: true,
    }),
    JwtModule.register({
      secret: 'sectretKey',
      signOptions: {
        expiresIn: '1d',
      },
    }),
    AuthModule,
    ProductModule,
    BidModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthorizedMiddleware).forRoutes(BidController, ProductController)
  }
}
