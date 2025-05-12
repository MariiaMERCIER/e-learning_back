import { forwardRef, Module } from '@nestjs/common';
import { LevelController } from './level.controller';
import { LevelService } from './level.service';
import { SubjectModule } from 'src/subject/subject.module';

@Module({
  controllers: [LevelController],
  providers: [LevelService],
  imports: [forwardRef(() => SubjectModule)],
  exports: [LevelService],
})
export class LevelModule {}
