import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt'
import RegisterDto from './dtos/register.dto';
import TokenPayload from './token-payload.interface'
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { parse } from 'cookie';

@Injectable()
export class AuthenticationService {
    constructor(
        private readonly usersService: UsersService,
        private readonly jwtService: JwtService,
        private readonly configService: ConfigService
    ) {}

    public async register(registrationData: RegisterDto)
    {
        try {
            if (registrationData.password)
            {
                const hashedPassword = await bcrypt.hash(registrationData.password, 10);
                const createdUser = await this.usersService.create({
                    ...registrationData,
                    password: hashedPassword
                });
                createdUser.password = undefined;
                return createdUser;
            }
            else
            {
                const createdUser = await this.usersService.create({
                    ...registrationData
                });
                return createdUser;
            }

        } catch (error) {
            if (error?.code === postgresErrorCode.UniqueViolation) {
                throw new HttpException('User with that email already exists', HttpStatus.BAD_REQUEST);
            }
            throw new HttpException('Something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    public async getAuthenticatedUser(username: string, hashedPassword: string) {
        try {
            const user = await this.usersService.getByUsername(username);
            await this.verifyPassword(user.password, hashedPassword);
            user.password = undefined;
            return user;
        } catch (error) {
            throw new HttpException('Wrong credentials provided', HttpStatus.BAD_REQUEST);
        }
    }

    private async verifyPassword(plainTextPassword: string, hashedPassword: string) {
        const isPasswordMatching = await bcrypt.compare(
            hashedPassword,
            plainTextPassword
        );
        if (!isPasswordMatching)
            throw new HttpException('Wrong credentials provided', HttpStatus.BAD_REQUEST);
    }

    public getCookieWithJwtAccessToken(userId: number, isSecondFactorAuthenticated = false) {
        const payload: TokenPayload = { 
            userId,
            isSecondFactorAuthenticated
        };
        const token = this.jwtService.sign(payload, {
            secret: this.configService.get('JWT_ACCESS_TOKEN_SECRET'),
            expiresIn: `${this.configService.get('JWT_ACCESS_TOKEN_EXPIRATION_TIME')}s`
        });
        return `Authentication=${token}; HttpOnly; Path=/; Max-Age=${this.configService.get('JWT_ACCESS_TOKEN_EXPIRATION_TIME')}`;
    }

    public getCookieWithJwtRefreshToken(userId: number) {
        const payload: TokenPayload = { userId };
        const token = this.jwtService.sign(payload, {
            secret: this.configService.get('JWT_REFRESH_TOKEN_SECRET'),
            expiresIn: `${this.configService.get('JWT_REFRESH_TOKEN_EXPIRATION_TIME')}s`
        });
        const cookie = `Refresh=${token}; HttpOnly; Path=/; Max-Age=${this.configService.get('JWT_REFRESH_TOKEN_EXPIRATION_TIME')}`;
        return {
            cookie,
            token
        }
    }

    public getCookiesForLogOut() {
        return [
            'Authentication=; HttpOnly; Path=/; Max-Age=0',
            'Refresh=; HttpOnly; Path=/; Max-Age=0',
            'user=; HttpOnly; Path=/; Max-Age=0',
            'ft_logged=; HttpOnly; Path=/; Max-Age=0'
        ];
    }

    public async getUserFromToken(token: string, tokenName: string) {
    const payload: TokenPayload = this.jwtService.verify(token, {
        secret: this.configService.get(tokenName)
        });
        if (payload.userId) {
        return this.usersService.getById(payload.userId);
        }
    }
}