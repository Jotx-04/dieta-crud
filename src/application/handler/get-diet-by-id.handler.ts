import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { GetDietByIdQuery } from "../queries/get-diet-by-id.query";
import { DietRepository } from "src/domain/repositories/diet-repository.interface";

@QueryHandler(GetDietByIdQuery)
export class GetDietByIdHandler implements IQueryHandler<GetDietByIdQuery>{
    constructor(private readonly dietRepository: DietRepository){}

    async execute(query: GetDietByIdQuery): Promise<any> {
        return await this.dietRepository.findById(query.id);
    }
}