import { DynamicModule, Global, Module } from '@nestjs/common';
import { ConfigService } from './config.service';
import { TOKEN_CONFIG_OPTIONS } from './constante';

@Global()
@Module({})
export class ConfigModule {
  static forRoot(options: ConfigOptions): DynamicModule {
    return {
      module: ConfigModule,
      providers: [
        ConfigService,
        {
          provide: TOKEN_CONFIG_OPTIONS,
          useValue: options,
        },
      ],
      exports: [ConfigService],
    };
  }
}
