import { Module } from '@nestjs/common';
import { ApplicationModule } from 'src/application/application.module';
import { DietController } from 'src/presentation/controller/diet.controller';

@Module({
    imports: [ApplicationModule],
    controllers: [DietController],

})
export class DietModule {}
