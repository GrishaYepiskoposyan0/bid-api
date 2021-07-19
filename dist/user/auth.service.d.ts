import { Repository } from 'typeorm';
import { LoginDto } from './dto/login.dto';
import { User } from './entity/user.entity';
import { JwtService } from '@nestjs/jwt';
import { RegisterDto } from './dto/register.dto';
export declare class AuthService {
    private authRepository;
    private jwtService;
    constructor(authRepository: Repository<User>, jwtService: JwtService);
    register(registerDto: RegisterDto): Promise<void>;
    login(loginDto: LoginDto): Promise<{
        access_token: string;
    }>;
}
