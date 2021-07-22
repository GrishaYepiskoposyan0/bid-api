"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const typeorm_1 = require("@nestjs/typeorm");
const path_1 = require("path");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const bet_controller_1 = require("./bet/bet.controller");
const bet_module_1 = require("./bet/bet.module");
const bet_entity_1 = require("./bet/entity/bet.entity");
const bid_controller_1 = require("./bid/bid.controller");
const bid_module_1 = require("./bid/bid.module");
const bid_entity_1 = require("./bid/entity/bid.entity");
const authorized_middleware_1 = require("./middleware/authorized.middleware");
const product_entity_1 = require("./product/entity/product.entity");
const product_controller_1 = require("./product/product.controller");
const product_module_1 = require("./product/product.module");
const auth_module_1 = require("./user/auth.module");
const user_entity_1 = require("./user/entity/user.entity");
let AppModule = class AppModule {
    configure(consumer) {
        consumer.apply(authorized_middleware_1.AuthorizedMiddleware).forRoutes(bid_controller_1.BidController, product_controller_1.ProductController, bet_controller_1.BetController);
    }
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: 'grish2003',
                database: 'biddb',
                entities: [user_entity_1.User, bid_entity_1.Bid, product_entity_1.Product, bet_entity_1.Bet],
                synchronize: true,
                migrations: [
                    path_1.join(__dirname, './migrations/*{.ts}')
                ],
                cli: {
                    migrationsDir: "src/migrations"
                }
            }),
            jwt_1.JwtModule.register({
                secret: 'sectretKey',
                signOptions: {
                    expiresIn: '1d',
                },
            }),
            auth_module_1.AuthModule,
            product_module_1.ProductModule,
            bid_module_1.BidModule,
            bet_module_1.BetModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map