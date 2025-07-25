import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { SubjectModule } from './subject/subject.module';
import { LevelModule } from './level/level.module';

import { ConfigModule } from './config/config.module';
import { TypeOrmModule } from '@nestjs/typeorm';

import { typeOrmModuleOptions } from './ormconfig';

@Module({
  imports: [
    SubjectModule,
    LevelModule,
    ConfigModule.forRoot({ folder: '' }),
    TypeOrmModule.forRoot(typeOrmModuleOptions),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
