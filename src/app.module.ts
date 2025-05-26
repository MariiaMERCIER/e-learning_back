import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { SubjectModule } from './subject/subject.module';
import { LevelModule } from './level/level.module';

import { ConfigModule } from './config/config.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubjectEntity } from './subject/entities/subject.entity';
import { LevelEntity } from './level/entities/level.entity';

@Module({
  imports: [
    SubjectModule,
    LevelModule,
    ConfigModule.forRoot({ folder: '' }),
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'mentor',
      entities: [SubjectEntity, LevelEntity],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
