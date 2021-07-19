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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bid = void 0;
const product_entity_1 = require("../../product/entity/product.entity");
const typeorm_1 = require("typeorm");
const bet_entity_1 = require("./bet.entity");
let Bid = class Bid {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Bid.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Bid.prototype, "minPrice", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], Bid.prototype, "isFinished", void 0);
__decorate([
    typeorm_1.ManyToMany(() => product_entity_1.Product),
    typeorm_1.JoinColumn(),
    __metadata("design:type", Array)
], Bid.prototype, "products", void 0);
__decorate([
    typeorm_1.OneToMany(() => bet_entity_1.Bet, bet => bet.bid),
    __metadata("design:type", Array)
], Bid.prototype, "bets", void 0);
Bid = __decorate([
    typeorm_1.Entity()
], Bid);
exports.Bid = Bid;
//# sourceMappingURL=bid.entity.js.map