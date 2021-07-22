"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BidService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const bet_service_1 = require("../bet/bet.service");
const product_entity_1 = require("../product/entity/product.entity");
const product_service_1 = require("../product/product.service");
const typeorm_2 = require("typeorm");
const bid_entity_1 = require("./entity/bid.entity");
let BidService = class BidService {
    constructor(bidRepository, betService, productService) {
        this.bidRepository = bidRepository;
        this.betService = betService;
        this.productService = productService;
    }
    async create(prods, minPrice) {
        let bid = new bid_entity_1.Bid();
        bid.isFinished = false;
        bid.minPrice = minPrice;
        let Products = [];
        await Promise.all(prods.map(async (id) => {
            Products.push(await this.productService.productRepository.findOne(id));
        }));
        bid.products = Products;
        const bidId = (await this.bidRepository.save(bid)).id;
        return {
            minPrice: bid.minPrice,
            proucts: Products.map(prod => prod.name)
        };
    }
    findAllBids() {
        return this.bidRepository.find({
            relations: ['products']
        });
    }
    async finishBid(id) {
        let bid = await this.bidRepository.findOne(id);
        const bets = (await this.betService.betRepository.find({
            relations: ['user', 'bid']
        })).filter(bet => bet.bid.id == bid.id);
        if (bets.length == 0) {
            throw new common_1.ForbiddenException('The auction could not be completed because there are no bids');
        }
        bid.isFinished = true;
        bid.id = Number(id);
        this.bidRepository.update(id, bid);
        const winner = {
            username: bets[bets.length - 1].user.username,
            email: bets[bets.length - 1].user.email
        };
        return {
            winner: winner,
            price: bets[bets.length - 1].price
        };
    }
};
BidService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(bid_entity_1.Bid)),
    __param(1, common_1.Inject(common_1.forwardRef(() => bet_service_1.BetService))),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        bet_service_1.BetService,
        product_service_1.ProductService])
], BidService);
exports.BidService = BidService;
//# sourceMappingURL=bid.service.js.map