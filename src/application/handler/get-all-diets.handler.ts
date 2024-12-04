import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

import { DietRepository } from '../../domain/repositories/diet-repository.interface';
import { GetAllDietsQuery } from '../queries/get-all-diet.query';

@QueryHandler(GetAllDietsQuery)
export class GetAllDietsHandler implements IQueryHandler<GetAllDietsQuery> {
  constructor(private readonly dietRepository: DietRepository) {}

  async execute(): Promise<any> {
    return this.dietRepository.findAll();
  }
}
