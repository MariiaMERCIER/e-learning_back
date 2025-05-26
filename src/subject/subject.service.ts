import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { LevelSubject } from 'src/level/level';
import { ConfigService } from 'src/config/config.service';
import { InjectRepository } from '@nestjs/typeorm';
import { SubjectEntity } from './entities/subject.entity';
import { Repository } from 'typeorm';
import { PostSubject } from './subject';

@Injectable()
export class SubjectService {
  constructor(
    @InjectRepository(SubjectEntity)
    private subjectRepository: Repository<SubjectEntity>,
    private configService: ConfigService,
  ) {}
  findAll(): Promise<SubjectEntity[]> {
    return this.subjectRepository.find();
  }

  async findOneById(id: number): Promise<SubjectEntity> {
    const subject = await this.subjectRepository.findOneBy({ id });
    if (!subject) {
      throw new Error(`Subject with id ${id} not found`);
    }
    return subject;
  }

  async createNewSubject({ name }: PostSubject): Promise<SubjectEntity> {
    console.log(name);
    const newSubject = await this.subjectRepository.save({ name });
    console.log(newSubject);
    return newSubject;
  }

  async levelSubjectFromName(name: string): Promise<LevelSubject> {
    const subject = await this.subjectRepository.findOneBy({ name });
    if (!subject) {
      throw new Error(`Subject with name ${name} not found`);
    }
    return {
      subject: {
        id: subject.id,
        name: subject.name,
      },
      level: {
        id: subject.level.id,
        name: subject.level.name,
      },
    };
  }

  findFavorite(): string {
    return this.configService.get('FAVORITE_SUBJECT');
  }
}
