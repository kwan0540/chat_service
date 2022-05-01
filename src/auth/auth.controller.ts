import { Controller, Get, Post, Body, Patch, Param, Delete, BadRequestException, Request, UseGuards, Header, Response } from '@nestjs/common';
import { LocalAuthGuard } from './local-auth.Guard'
import { Response as Res} from 'express'
import { AuthService } from './auth.service'
import * as moment from 'moment'


@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @UseGuards(LocalAuthGuard)
    @Post('/login')
    login(@Request() req) {
        const token = this.authService.login(req.user).accessToken
        return ({
            message: {
                token,
                userID: req.user.id,
                firstName: req.user.first_name,
                lastName: req.user.last_name
            },
            statusCode: 200,
            timeStamp: moment()
        })
    }
}
