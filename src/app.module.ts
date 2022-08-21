import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {ServeStaticModule} from '@nestjs/serve-static'
import { ConfigModule } from '@nestjs/config';

import { join } from 'path';
import { PokemonModule } from './pokemon/pokemon.module';
import { CommonModule } from './common/common.module';
import { SeedModule } from './seed/seed.module';
import { envConfiguration } from './config/env.config';
import { joiValidationSchema } from './config/joi.validation';

@Module({
  imports: [
      ConfigModule.forRoot({
        load: [envConfiguration],
        validationSchema: joiValidationSchema,
      }),
      
      ServeStaticModule.forRoot({
  rootPath: join(__dirname,'..','public'), }),
      
      MongooseModule.forRoot( process.env.MONGODB),
      
      PokemonModule,
      
      CommonModule,
      
      SeedModule
  ],
})
export class AppModule {}
