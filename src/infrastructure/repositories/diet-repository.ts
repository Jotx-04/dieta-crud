import { Injectable } from "@nestjs/common";
import { Diet } from "src/domain/entities/diet.entity";
import { DietRepository } from "src/domain/repositories/diet-repository.interface";

@Injectable()
export class DietRepositoryImpl implements DietRepository {
    private diets: Diet[] = [];

    async findAll(): Promise<Diet[]> {
        return this.diets;
    }

    async findById(id: string): Promise<Diet | null> {
        return this.diets.find(diets => diets.id === id) || null;
    }

    async save(diet: Diet): Promise<void> {
        this.diets.push(diet);
    }

    async update(id: string, updates: Partial<Diet>): Promise<void> {
        const index = this.diets.findIndex((diet) => diet.id === id);

        if (index !== -1) {
            this.diets[index] = {...this.diets[index], ...updates};
        }
    }

    async delete(id: string): Promise<void> {
        this.diets = this.diets.filter((diet) => diet.id === id);
    }
}