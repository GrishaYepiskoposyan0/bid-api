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
const product_entity_1 = require("../product/entity/product.entity");
const product_service_1 = require("../product/product.service");
const user_entity_1 = require("../user/entity/user.entity");
const typeorm_2 = require("typeorm");
const bet_entity_1 = require("./entity/bet.entity");
const bid_entity_1 = require("./entity/bid.entity");
const bid_product_1 = require("./entity/bid_product");
let BidService = class BidService {
    constructor(bidRepository, betRepository, productService, bid_ProductRepository) {
        this.bidRepository = bidRepository;
        this.betRepository = betRepository;
        this.productService = productService;
        this.bid_ProductRepository = bid_ProductRepository;
    }
    async create(prods, bidDto) {
        let bid = new bid_entity_1.Bid();
        bid.isFinished = false;
        bid.minPrice = bidDto.minPrice;
        let Products = [];
        Array.prototype.forEach.call(prods, async (id) => {
            Products.push(await this.productService.productRepository.findOne(id));
        });
        bid.products = Products;
        const bidId = (await this.bidRepository.save(bid)).id;
        Array.prototype.forEach.call(prods, async (id) => {
            let bid_product = new bid_product_1.Bid_Product();
            bid_product.bidId = bidId;
            bid_product.productId = Number(id);
            console.log(bid_product);
            await this.bid_ProductRepository.save(bid_product);
        });
        return bid;
    }
    findAllBids() {
        return this.betRepository.find({
            relations: ['user', 'bid']
        });
    }
    async findBetsForBid(bidId) {
        return (await this.betRepository.find({
            relations: ['user', 'bid']
        })).filter(bet => bet.bid.id == Number(bidId));
    }
    async findMyBets(user) {
        const bets = (await this.betRepository.find({
            relations: ['user', 'bid']
        })).filter(bet => bet.user.id == user.id);
        return bets;
    }
    async makeABet(bidId, betDto, user) {
        const bid = await this.bidRepository.findOne(bidId);
        const bet = (await this.betRepository.find({
            relations: ['user', 'bid']
        })).filter(bet => bet.bid.id == bid.id);
        if (!bid.isFinished) {
            if (bet.length != 0) {
                if (bet[bet.length - 1].price < betDto.price) {
                    betDto.datetime = new Date().toUTCString();
                    betDto.bid = (await this.bidRepository.findOne(bidId));
                    betDto.user = user;
                    this.betRepository.save(betDto);
                }
                else {
                    throw new common_1.ForbiddenException('You cannot make a bet with this price: ' + betDto.price
                        + '.\n The minimum bet you can use is: ' + bet[bet.length - 1].price + 1);
                }
            }
            else {
                if (bid.minPrice < betDto.price) {
                    betDto.datetime = new Date().toUTCString();
                    betDto.bid = (await this.bidRepository.findOne(bidId));
                    betDto.user = user;
                    this.betRepository.save(betDto);
                }
                else {
                    throw new common_1.ForbiddenException('You cannot make a bet with this price: ' + betDto.price
                        + '.\n The minimum bet you can use is: ' + bid.minPrice + 1);
                }
            }
        }
        else {
            throw new common_1.NotFoundException('Bid is finished');
        }
    }
    async finishBid(id) {
        let bid = await this.bidRepository.findOne(id);
        bid.isFinished = true;
        bid.id = Number(id);
        this.bidRepository.update(id, bid);
        const bets = (await this.betRepository.find({
            relations: ['user', 'bid']
        })).filter(bet => bet.bid.id == bid.id);
        return `The bid ${id} was win ${bets[bets.length - 1].user.username} with price ${bets[bets.length - 1].price}`;
    }
};
BidService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(bid_entity_1.Bid)),
    __param(1, typeorm_1.InjectRepository(bet_entity_1.Bet)),
    __param(3, typeorm_1.InjectRepository(bid_product_1.Bid_Product)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        product_service_1.ProductService,
        typeorm_2.Repository])
], BidService);
exports.BidService = BidService;
//# sourceMappingURL=bid.service.js.map