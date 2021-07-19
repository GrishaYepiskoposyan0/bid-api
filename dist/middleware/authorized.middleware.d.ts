import { NestMiddleware } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt/dist/jwt.service';
import { Request, Response, NextFunction } from 'express';
export declare class AuthorizedMiddleware implements NestMiddleware {
    private jwtService;
    constructor(jwtService: JwtService);
    use(req: Request, res: Response, next: NextFunction): void;
}
