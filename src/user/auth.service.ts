/* eslint-disable prettier/prettier */
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LoginDto } from './dto/login.dto';
import { User } from './entity/user.entity';
import * as bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthService{
    constructor(
        @InjectRepository(User)
        private authRepository: Repository<User>,
        private jwtService: JwtService
    ){}

    async register(registerDto: RegisterDto): Promise<void>{
        registerDto.password = await bcrypt.hash(registerDto.password, 12)
        this.authRepository.save(registerDto)
    }

    async login(loginDto: LoginDto){
        const email = loginDto.email
        const user = await this.authRepository.findOne({email: email})

        if(!user){
            throw new BadRequestException('User not found!')
        }
        if(!await bcrypt.compare(loginDto.password, user.password)){
            throw new BadRequestException('Invalid password!')
        }

        const jwt = await this.jwtService.signAsync({user: user})
        return {
            access_token: jwt
        };
    }
}