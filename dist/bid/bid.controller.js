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
exports.BidController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const bid_service_1 = require("./bid.service");
const bid_dto_1 = require("./dto/bid.dto");
let BidController = class BidController {
    constructor(bidService) {
        this.bidService = bidService;
    }
    create(bid) {
        return this.bidService.create(bid.productIds, bid.minPrice);
    }
    findAllBids() {
        console.log(1111111);
        return this.bidService.findAllBids();
    }
    finish(id) {
        return this.bidService.finishBid(id);
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [bid_dto_1.BidDto]),
    __metadata("design:returntype", void 0)
], BidController.prototype, "create", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BidController.prototype, "findAllBids", null);
__decorate([
    common_1.Patch('finish/:bidId'),
    __param(0, common_1.Param('bidId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BidController.prototype, "finish", null);
BidController = __decorate([
    common_1.Controller('bid'),
    swagger_1.ApiBearerAuth(),
    __metadata("design:paramtypes", [bid_service_1.BidService])
], BidController);
exports.BidController = BidController;
//# sourceMappingURL=bid.controller.js.map