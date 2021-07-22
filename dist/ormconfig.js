"use strict";
const path_1 = require("path");
const bet_entity_1 = require("./bet/entity/bet.entity");
const bid_entity_1 = require("./bid/entity/bid.entity");
const bid_product_1 = require("./bid/entity/bid_product");
const product_entity_1 = require("./product/entity/product.entity");
const user_entity_1 = require("./user/entity/user.entity");
const connectionOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'grish2003',
    database: 'biddb',
    entities: [user_entity_1.User, bid_entity_1.Bid, product_entity_1.Product, bid_product_1.Bid_Product, bet_entity_1.Bet],
    synchronize: true,
    migrations: [
        path_1.join(__dirname, 'migrations/*{.ts,.js}')
    ],
    cli: {
        migrationsDir: 'src/migrations'
    }
};
module.exports = connectionOptions;
//# sourceMappingURL=ormconfig.js.map