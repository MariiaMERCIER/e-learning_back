import { Controller, Get, Param } from '@nestjs/common';
import { LevelService } from './level.service';
import { LevelSubject } from './level';

@Controller('level')
export class LevelController {
  constructor(private readonly levelService: LevelService) {}
  @Get('subject/:name')
  findLevelSubjectByName(@Param('name') name: string): Promise<LevelSubject> {
    return this.levelService.findLevelSubjectByName(name);
  }
}
