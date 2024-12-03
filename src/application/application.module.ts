import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

import { InfrastructureModule } from 'src/infrastructure/infrastructure.module';
import { GetAllDietsHandler } from './handler/get-all-diets.handler';
import { GetDietByIdHandler } from './handler/get-diet-by-id.handler';
import { DeleteDietHandler } from './handler/delete-diet.handler';
import { UpdateDietHandler } from './handler/update-diet.handler';
import { CreateDietHandler } from './handler/create-diet.handler';

@Module({
    imports: [CqrsModule, InfrastructureModule],
    providers: [CreateDietHandler, GetAllDietsHandler, GetDietByIdHandler, DeleteDietHandler, UpdateDietHandler],
    exports: [CqrsModule],
})
export class ApplicationModule {}
