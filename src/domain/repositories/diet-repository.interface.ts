import { Diet } from "../entities/diet.entity";

export interface DietRepository {
    findAll(): Promise<Diet[]>;
    findById(id: string): Promise<Diet | null>;
    save(diet: Diet): Promise<void>;
    update(id: string, diet: Partial<Diet>): Promise<void>;
    delete(id: string): Promise<void>;
}