import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { Level, LevelSubject } from './level';
import { SubjectService } from 'src/subject/subject.service';

import { BddService } from 'src/bdd/bdd.service';

@Injectable()
export class LevelService {
  constructor(
    @Inject(forwardRef(() => SubjectService))
    private readonly subjectService: SubjectService,
    private bdd: BddService,
  ) {}

  findAll(): Level[] {
    return this.bdd.get<Level>('levels');
  }

  findLevelSubjectByName(name: string): LevelSubject[] {
    const level = this.findAll().find((level) => level.name === name);
    if (!level) {
      throw new Error(`Level with name ${name} not found`);
    }
    const subjects = this.subjectService.findAll();
    const filteredSubjects = subjects.filter((s) => s.levelId === level.id);
    return filteredSubjects.map<LevelSubject>((subject) => ({
      level,
      subject,
    }));
  }
}
