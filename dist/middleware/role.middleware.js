"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleMiddleware = void 0;
const common_1 = require("@nestjs/common");
class RoleMiddleware {
    use(req, res, next) {
        if (req.user['user']['role'] != 'admin') {
            throw new common_1.NotFoundException();
            return;
        }
        next();
    }
}
exports.RoleMiddleware = RoleMiddleware;
//# sourceMappingURL=role.middleware.js.map