"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BetModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const bid_module_1 = require("../bid/bid.module");
const bid_service_1 = require("../bid/bid.service");
const bid_entity_1 = require("../bid/entity/bid.entity");
const product_entity_1 = require("../product/entity/product.entity");
const product_module_1 = require("../product/product.module");
const product_service_1 = require("../product/product.service");
const bet_controller_1 = require("./bet.controller");
const bet_service_1 = require("./bet.service");
const bet_entity_1 = require("./entity/bet.entity");
let BetModule = class BetModule {
};
BetModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([bet_entity_1.Bet, bid_entity_1.Bid, product_entity_1.Product]),
            common_1.forwardRef(() => bid_module_1.BidModule),
            product_module_1.ProductModule
        ],
        controllers: [bet_controller_1.BetController],
        providers: [bet_service_1.BetService, product_service_1.ProductService, bid_service_1.BidService]
    })
], BetModule);
exports.BetModule = BetModule;
//# sourceMappingURL=bet.module.js.map