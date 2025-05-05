import { Injectable } from '@nestjs/common';
import { PostSubject, Subject } from './subject';
import { SUBJECTS } from './bdd';

@Injectable()
export class SubjectService {
  createNewSubject(subject: PostSubject): Subject[] {
    const sortedByIdSubject = SUBJECTS.sort((a, b) => a.id - b.id);
    const newId = sortedByIdSubject[sortedByIdSubject.length - 1].id + 1;
    return [...SUBJECTS, { id: newId, name: subject.name }];
  }

  findOneById(id: number): Subject {
    const subject = SUBJECTS.find((subject) => subject.id === id);
    if (!subject) {
      throw new Error(`Subject with id ${id} not found`);
    }
    return subject;
  }
}
