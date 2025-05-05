import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { SUBJECTS } from './bdd';
import { PostSubject, Subject } from './subject';
import { SubjectService } from './subject.service';

@Controller('subject')
export class SubjectController {
  constructor(private readonly subjectService: SubjectService) {}
  @Get()
  findAll(): Subject[] {
    return SUBJECTS;
  }

  @Get(':id')
  findOneById(@Param('id') id: string): Subject {
    return this.subjectService.findOneById(+id);
  }

  @Post()
  addSubject(@Body() subject: PostSubject): Subject[] {
    return this.subjectService.createNewSubject(subject);
  }
}
