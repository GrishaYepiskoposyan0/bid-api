import { ApiProperty } from "@nestjs/swagger"

export class RegisterDto{
    @ApiProperty()
    username: string

    @ApiProperty({
        default: 'user'
    })
    role: string
    
    @ApiProperty()
    email: string

    @ApiProperty()
    password: string
}