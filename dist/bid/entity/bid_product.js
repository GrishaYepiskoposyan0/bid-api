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
exports.Bid_Product = void 0;
const user_entity_1 = require("../../user/entity/user.entity");
const typeorm_1 = require("typeorm");
let Bid_Product = class Bid_Product {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Bid_Product.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Bid_Product.prototype, "bidId", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Bid_Product.prototype, "productId", void 0);
Bid_Product = __decorate([
    typeorm_1.Entity()
], Bid_Product);
exports.Bid_Product = Bid_Product;
//# sourceMappingURL=bid_product.js.map