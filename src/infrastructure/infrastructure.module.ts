import { Module } from '@nestjs/common';
import { DietRepositoryImpl } from './repositories/diet-repository';
import { DietRepository } from 'src/domain/repositories/diet-repository.interface';
import { ApplicationModule } from 'src/application/application.module';
import { Diet } from 'src/domain/entities/diet.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    providers: [
        {
            provide: 'DietRepository',
            useClass: DietRepositoryImpl,
        },
        DietRepositoryImpl
    ],
    exports: [DietRepositoryImpl],
    imports: [TypeOrmModule.forFeature([Diet])],
})
export class InfrastructureModule {}
