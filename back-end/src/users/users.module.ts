import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import User from './user.entity';
import { ConfigModule } from '@nestjs/config';
import { LocalFilesModule } from 'src/local-files/local-files.module';

@Module({
  imports: [TypeOrmModule.forFeature([User]), ConfigModule, LocalFilesModule],
  providers: [UsersService],
  exports: [UsersService],
  controllers: [UsersController]
})
export class UsersModule {}
