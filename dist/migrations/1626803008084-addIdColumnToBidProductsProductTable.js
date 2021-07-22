"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addIdColumnToBidProductsProductTable1626803008084 = void 0;
class addIdColumnToBidProductsProductTable1626803008084 {
    async up(queryRunner) {
        await queryRunner.query('use biddb; ALTER TABLE `bid_products_product` ADD id INT PRIMARY KEY AUTO_INCREMENT');
    }
    async down(queryRunner) {
        await queryRunner.query('use biddb; ALTER TABLE `bid_products_product` DROP COLUMN `id`');
    }
}
exports.addIdColumnToBidProductsProductTable1626803008084 = addIdColumnToBidProductsProductTable1626803008084;
//# sourceMappingURL=1626803008084-addIdColumnToBidProductsProductTable.js.map