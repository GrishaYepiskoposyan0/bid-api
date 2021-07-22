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
exports.BetController = void 0;
const common_1 = require("@nestjs/common");
const bet_service_1 = require("./bet.service");
const bet_dto_1 = require("./dto/bet.dto");
const swagger_1 = require("@nestjs/swagger");
let BetController = class BetController {
    constructor(betService) {
        this.betService = betService;
    }
    findBetsForBid(bidId) {
        return this.betService.findBetsForBid(bidId);
    }
    findAllMine(req) {
        return this.betService.findMyBets(req.user['user']);
    }
    makeABet(bidId, betDto, req) {
        return this.betService.makeABet(bidId, betDto.price, req.user['user']);
    }
};
__decorate([
    common_1.Get(':bid_id'),
    __param(0, common_1.Param('bid_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BetController.prototype, "findBetsForBid", null);
__decorate([
    common_1.Get(),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], BetController.prototype, "findAllMine", null);
__decorate([
    common_1.Post(':bid_id'),
    __param(0, common_1.Param('bid_id')),
    __param(1, common_1.Body()),
    __param(2, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, bet_dto_1.BetDto, Object]),
    __metadata("design:returntype", void 0)
], BetController.prototype, "makeABet", null);
BetController = __decorate([
    common_1.Controller('bet'),
    swagger_1.ApiBearerAuth(),
    __metadata("design:paramtypes", [bet_service_1.BetService])
], BetController);
exports.BetController = BetController;
//# sourceMappingURL=bet.controller.js.map