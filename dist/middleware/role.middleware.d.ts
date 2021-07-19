import { NestMiddleware } from "@nestjs/common";
import { NextFunction, Request } from "express";
export declare class RoleMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction): void;
}
