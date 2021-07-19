/* eslint-disable prettier/prettier */
import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt/dist/jwt.service';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class AuthorizedMiddleware implements NestMiddleware {
  constructor(
    private jwtService: JwtService
  ) {}
  use(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization
    if(!token || token.length <= 0){
        throw new UnauthorizedException('You are not logged in!')
        return
    }
    const access_token = token.replace('Bearer ','')
    const user = this.jwtService.decode(access_token)
    req.user = user
    next();
  }
}