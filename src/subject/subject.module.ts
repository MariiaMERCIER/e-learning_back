import { Module } from '@nestjs/common';
import { SubjectService } from './subject.service';
import { SubjectController } from './subject.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubjectEntity } from './entities/subject.entity';

@Module({
  exports: [SubjectService],
  controllers: [SubjectController],
  providers: [SubjectService],
  imports: [TypeOrmModule.forFeature([SubjectEntity])],
})
export class SubjectModule {}
