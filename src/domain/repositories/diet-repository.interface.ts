import { Diet } from "../entities/diet.entity";

export interface DietRepository {
    findById(id: string): Promise<Diet | null>;
    create(diet: Diet): Promise<void>;
    update(diet: Partial<Diet>): Promise<void>;
    delete(id: string): Promise<void>;
}