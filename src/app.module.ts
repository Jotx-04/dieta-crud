import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DietModule } from './diet/diet.module';
import { ApplicationModule } from './application/application.module';
import { DomainModule } from './domain/domain.module';
import { InfrastructureModule } from './infrastructure/infrastructure.module';
import { PresentationModule } from './presentation/presentation.module';

@Module({
  imports: [DietModule, ApplicationModule, DomainModule, InfrastructureModule, PresentationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
