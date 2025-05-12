import { Global, Module } from '@nestjs/common';
import { BddService } from './bdd.service';
import { LEVELS, SUBJECTS } from './bdd';
import { TOKEN_LEVELS, TOKEN_SUBJECTS } from './constante';

@Global()
@Module({
  providers: [
    BddService,
    {
      provide: TOKEN_LEVELS,
      useValue: LEVELS,
    },
    {
      provide: TOKEN_SUBJECTS,
      useValue: SUBJECTS,
    },
  ],

  exports: [BddService, TOKEN_LEVELS, TOKEN_SUBJECTS],
})
export class BddModule {}
