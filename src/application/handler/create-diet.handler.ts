import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { CreateDietCommand } from "../commands/create-diet.command";

import { Diet } from "src/domain/entities/diet.entity";
import { DietRepository } from "src/domain/repositories/diet-repository.interface";

@CommandHandler(CreateDietCommand)
export class CreateDietHandler implements ICommandHandler <CreateDietCommand>{
    constructor(private readonly dietRepository: DietRepository){}
    
    async execute(command: CreateDietCommand): Promise<void> {
        const diet = new Diet(
            Date.now().toString(),
            command.patientName,
            command.startDate,
            command.description
        );
        await this.dietRepository.create(diet);
    }
}