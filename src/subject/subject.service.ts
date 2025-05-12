import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { PostSubject, Subject } from './subject';

import { BddService } from 'src/bdd/bdd.service';
import { Level, LevelSubject } from 'src/level/level';
import { LevelService } from 'src/level/level.service';
import { TOKEN_LEVELS } from 'src/bdd/constante';

@Injectable()
export class SubjectService {
  constructor(
    private bdd: BddService,
    @Inject(TOKEN_LEVELS) private bddLevels: Level[],
  ) {}
  findAll(): Subject[] {
    return this.bdd.get<Subject>('subjects');
  }

  createNewSubject(subject: PostSubject): Subject[] {
    const sortedByIdSubject = this.findAll().sort((a, b) => a.id - b.id);
    const newId = sortedByIdSubject[sortedByIdSubject.length - 1].id + 1;
    return [
      ...this.findAll(),
      { id: newId, name: subject.name, levelId: subject.levelId },
    ];
  }

  findOneById(id: number): Subject {
    return this.bdd.getById<Subject>('subjects', id);
  }

  levelSubjectFromName(name: string): LevelSubject[] {
    const subject = this.findAll().find((s) => s.name === name);
    const levels = this.bddLevels;
    const filteredLevels = levels.filter((l) => l.id === subject?.levelId);
    return filteredLevels.map<LevelSubject>((level) => ({
      level,
      subject,
    }));
  }
}
