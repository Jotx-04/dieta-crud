import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { DietRepository } from "src/domain/repositories/diet-repository.interface";
import { GetAllDietsQuery } from "../queries/get-all-diets.query";

@QueryHandler(GetAllDietsQuery)
export class GetAllDietsHandler implements IQueryHandler<GetAllDietsQuery>{
    constructor(private readonly dietRepository: DietRepository){}
    execute(): Promise<any> {
        return this.dietRepository.findAll();
    }
    
}