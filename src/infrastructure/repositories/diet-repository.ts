import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Diet } from "src/domain/entities/diet.entity";
import { DietRepository } from "src/domain/repositories/diet-repository.interface";
import { Repository } from "typeorm";

@Injectable()
export class DietRepositoryImpl implements DietRepository {


    constructor(@InjectRepository(Diet)
                private dietRepo: Repository<Diet>
    ){}

    async findById(id: string): Promise<Diet | null> {
        return this.dietRepo.findOneById(id);
    }
    

    async create(diet: Diet): Promise<void> {
        this.dietRepo.save(diet);
    }

    async update(diet: Diet): Promise<void> {
        const index = this.dietRepo.save(diet);

    }

    async delete(id: string): Promise<void> {
        await this.dietRepo.delete(id);
    }
}