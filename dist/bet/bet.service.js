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
exports.BetService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const bid_service_1 = require("../bid/bid.service");
const user_entity_1 = require("../user/entity/user.entity");
const typeorm_2 = require("typeorm");
const bet_entity_1 = require("./entity/bet.entity");
let BetService = class BetService {
    constructor(betRepository, bidService) {
        this.betRepository = betRepository;
        this.bidService = bidService;
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
    async makeABet(bidId, price, user) {
        const bid = await this.bidService.bidRepository.findOne(bidId);
        const bet = new bet_entity_1.Bet();
        bet.price = price;
        const bets = (await this.betRepository.find({
            relations: ['user', 'bid']
        })).filter(bet => bet.bid.id == bid.id);
        if (!bid.isFinished) {
            if (bets.length != 0) {
                if (bets[bets.length - 1].price < price) {
                    bet.datetime = new Date().toUTCString();
                    bet.bid = (await this.bidService.bidRepository.findOne(bidId));
                    bet.user = user;
                    this.betRepository.save(bet);
                }
                else {
                    throw new common_1.ForbiddenException('You cannot make a bet with this price: ' + price
                        + '.\n The minimum bet you can use is: ' + bets[bets.length - 1].price + 1);
                }
            }
            else {
                if (bid.minPrice < bet.price) {
                    bet.datetime = new Date().toUTCString();
                    bet.bid = (await this.bidService.bidRepository.findOne(bidId));
                    bet.user = user;
                    this.betRepository.save(bet);
                }
                else {
                    throw new common_1.ForbiddenException('You cannot make a bet with this price: ' + price
                        + '.\n The minimum bet you can use is: ' + bid.minPrice + 1);
                }
            }
        }
        else {
            throw new common_1.NotFoundException('Bid is finished');
        }
    }
};
BetService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(bet_entity_1.Bet)),
    __param(1, common_1.Inject(common_1.forwardRef(() => bid_service_1.BidService))),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        bid_service_1.BidService])
], BetService);
exports.BetService = BetService;
//# sourceMappingURL=bet.service.js.map