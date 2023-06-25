import { Module } from '@nestjs/common';
import { TwoFactorAuthenticationController } from './two-factor-authentication.controller';
import { TwoFactorAuthenticationService } from './two-factor-authentication.service';
import { AuthenticationModule } from 'src/authentication/authentication.module';
import { UsersModule } from 'src/users/users.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports:[ AuthenticationModule, UsersModule, ConfigModule],
  controllers: [TwoFactorAuthenticationController],
  providers: [TwoFactorAuthenticationService]
})
export class TwoFactorAuthenticationModule {}
