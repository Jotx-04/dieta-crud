import { Module } from '@nestjs/common';
import { DietRepositoryImpl } from './repositories/diet-repository';
import { DietRepository } from 'src/domain/repositories/diet-repository.interface';

@Module({
    providers: [
        {
            provide: DietRepositoryImpl,
            useClass: DietRepositoryImpl,
        },
    ],
    exports: [DietRepositoryImpl],
})
export class InfrastructureModule {}
