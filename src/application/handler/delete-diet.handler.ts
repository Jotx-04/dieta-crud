import { DeleteDietCommand } from "../commands/delete-diet.command";
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { DietRepository } from '../../domain/repositories/diet-repository.interface';

@CommandHandler(DeleteDietCommand)
export class DeleteDietHandler implements ICommandHandler<DeleteDietCommand> {
    constructor(private readonly dietRepository: DietRepository) {}

    async execute(command: DeleteDietCommand): Promise<void> {
        await this.dietRepository.delete(command.id);
    }
}
