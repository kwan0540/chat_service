import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class AuthService {

    constructor(private userService: UserService, private jwtService: JwtService) {}

    async validateUser(username: string, pass: string) {
        const user = await this.userService.findLoginName(username)
        if (user && user.password === pass) {
            return user
        }
        return null
    }

    login(user: any) {
        const payload = {
            username: user.username,
            sub: user.userID
        }
        return {
            accessToken: this.jwtService.sign(payload)
        }
    }

}
