import { CqrsModule } from '@nestjs/cqrs';
import { CreateDietHandler } from './handler/create-diet.handler';
import { GetAllDietsHandler } from './handler/get-all-diets.handler';
import { GetDietByIdHandler } from './handler/get-diet-by-id.handler';

import { Module } from '@nestjs/common';
import { DeleteDietHandler } from './handler/delete-diet.handler';
import { UpdateDietHandler } from './handler/update-diet.handler';

@Module({
  imports: [CqrsModule],
  providers: [
    CreateDietHandler,
    GetAllDietsHandler,
    GetDietByIdHandler,
    DeleteDietHandler,
    UpdateDietHandler
  ],
  exports: [CqrsModule],
})
export class ApplicationModule {}
