"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BidModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const product_entity_1 = require("../product/entity/product.entity");
const product_module_1 = require("../product/product.module");
const product_service_1 = require("../product/product.service");
const auth_module_1 = require("../user/auth.module");
const auth_service_1 = require("../user/auth.service");
const user_entity_1 = require("../user/entity/user.entity");
const bid_controller_1 = require("./bid.controller");
const bid_service_1 = require("./bid.service");
const bid_entity_1 = require("./entity/bid.entity");
const bet_service_1 = require("../bet/bet.service");
const bet_entity_1 = require("../bet/entity/bet.entity");
const bet_module_1 = require("../bet/bet.module");
let BidModule = class BidModule {
};
BidModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([bid_entity_1.Bid, user_entity_1.User, product_entity_1.Product, bet_entity_1.Bet]),
            auth_module_1.AuthModule,
            product_module_1.ProductModule,
            common_1.forwardRef(() => bet_module_1.BetModule),
        ],
        providers: [bid_service_1.BidService, product_service_1.ProductService, bet_service_1.BetService],
        controllers: [bid_controller_1.BidController],
    })
], BidModule);
exports.BidModule = BidModule;
//# sourceMappingURL=bid.module.js.map