import { Module } from '@nestjs/common';
import { LevelController } from './level.controller';
import { LevelService } from './level.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LevelEntity } from './entities/level.entity';

@Module({
  controllers: [LevelController],
  providers: [LevelService],
  imports: [TypeOrmModule.forFeature([LevelEntity])],
  exports: [LevelService],
})
export class LevelModule {}
