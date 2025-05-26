import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { SUBJECTS } from './bdd';
import { PostSubject, Subject } from './subject';
import { SubjectService } from './subject.service';
import { LevelSubject } from 'src/level/level';
import { SubjectEntity } from './entities/subject.entity';

@Controller('subject')
export class SubjectController {
  constructor(private readonly subjectService: SubjectService) {}

  @Get()
  findAll(): Promise<SubjectEntity[]> {
    return this.subjectService.findAll();
  }

  @Get('favorite')
  findFavorite(): string {
    return this.subjectService.findFavorite();
  }

  @Get(':id')
  findOneById(@Param('id') id: string): Promise<SubjectEntity> {
    return this.subjectService.findOneById(+id);
  }

  @Get(':name/level')
  findLevelSubject(@Param('name') name: string): Promise<LevelSubject> {
    return this.subjectService.levelSubjectFromName(name);
  }

  @Post()
  addSubject(@Body() subject: PostSubject): Promise<SubjectEntity> {
    return this.subjectService.createNewSubject(subject);
  }
}
