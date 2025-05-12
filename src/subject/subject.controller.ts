import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { SUBJECTS } from './bdd';
import { PostSubject, Subject } from './subject';
import { SubjectService } from './subject.service';
import { LevelSubject } from 'src/level/level';

@Controller('subject')
export class SubjectController {
  constructor(private readonly subjectService: SubjectService) {}

  @Get()
  findAll(): Subject[] {
    return SUBJECTS;
  }

  @Get('favorite')
  findFavorite(): string {
    return this.subjectService.findFavorite();
  }

  @Get(':id')
  findOneById(@Param('id') id: string): Subject {
    return this.subjectService.findOneById(+id);
  }

  @Get(':name/level')
  findLevelSubject(@Param('name') name: string): LevelSubject[] {
    return this.subjectService.levelSubjectFromName(name);
  }

  @Post()
  addSubject(@Body() subject: PostSubject): Subject[] {
    return this.subjectService.createNewSubject(subject);
  }
}
