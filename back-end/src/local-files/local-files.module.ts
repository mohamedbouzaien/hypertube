import { Module } from '@nestjs/common';
import LocalFilesController from './local-files.controller';
import { LocalFilesService } from './local-files.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import LocalFile from './local-file.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [TypeOrmModule.forFeature([LocalFile]), ConfigModule],
  controllers: [LocalFilesController],
  exports: [LocalFilesService],
  providers: [LocalFilesService]
})
export class LocalFilesModule {}
