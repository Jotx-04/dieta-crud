import { DietRepository } from "src/domain/repositories/diet-repository.interface";
import { UpdateDietCommand } from "../commands/update-diet.command";
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(UpdateDietCommand)
export class UpdateDietHandler implements ICommandHandler<UpdateDietCommand>{
    constructor(private readonly dietRepository: DietRepository){}

    async execute(command: UpdateDietCommand): Promise<void> {
        await this.dietRepository.update(command.updates);
    }
}