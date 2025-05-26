import { Injectable } from '@nestjs/common';
import { LevelSubject } from './level';
import { InjectRepository } from '@nestjs/typeorm';
import { LevelEntity } from './entities/level.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LevelService {
  constructor(
    @InjectRepository(LevelEntity)
    private levelRepository: Repository<LevelEntity>,
  ) {}

  findAll(): Promise<LevelEntity[]> {
    return this.levelRepository.find();
  }

  async findLevelSubjectByName(name: string): Promise<LevelSubject> {
    const level = await this.levelRepository.findOneBy({ name });
    if (!level) {
      throw new Error(`Level with name ${name} not found`);
    }
    return {
      subject: {
        id: level.id,
        name: level.name,
      },
      level: {
        id: level.id,
        name: level.name,
      },
    };
  }
}
