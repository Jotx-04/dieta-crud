import { Module } from '@nestjs/common';
import { DietRepositoryImpl } from './repositories/diet-repository';

@Module({
  providers: [DietRepositoryImpl],
  exports: [DietRepositoryImpl],
})
export class InfrastructureModule {}
