import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

import { InfrastructureModule } from 'src/infrastructure/infrastructure.module';
import { GetDietByIdHandler } from './handler/get-diet-by-id.handler';
import { DeleteDietHandler } from './handler/delete-diet.handler';
import { UpdateDietHandler } from './handler/update-diet.handler';
import { CreateDietHandler } from './handler/create-diet.handler';
import { DietRepositoryImpl } from 'src/infrastructure/repositories/diet-repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Diet } from 'src/domain/entities/diet.entity';

@Module({
    imports: [CqrsModule, InfrastructureModule, TypeOrmModule.forRoot({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'password',
        database: 'diet_db',
        entities: [Diet],
        synchronize: true,
    }),
    TypeOrmModule.forFeature([DietRepositoryImpl]),
],
    providers: [
        CreateDietHandler,  
        GetDietByIdHandler, 
        DeleteDietHandler, 
        UpdateDietHandler,
        {
            provide: DietRepositoryImpl,
            useClass: DietRepositoryImpl,   
        }
    ],
    exports: [CqrsModule],
})
export class ApplicationModule {}
