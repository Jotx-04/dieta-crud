import { Injectable } from '@nestjs/common';
import { Diet } from '../../domain/entities/diet.entity';
import { DietRepository } from '../../domain/repositories/diet-repository.interface';

@Injectable()
export class DietRepositoryImpl implements DietRepository {
  private diets: Diet[] = [];

  async findAll(): Promise<Diet[]> {
    return this.diets;
  }

  async findById(id: string): Promise<Diet | null> {
    return this.diets.find(diet => diet.id === id) || null;
  }

  async save(diet: Diet): Promise<void> {
    this.diets.push(diet);
  }

  async update(id: string, diet: Partial<Diet>): Promise<void> {
    const index = this.diets.findIndex(d => d.id === id);
    if (index !== -1) {
      this.diets[index] = { ...this.diets[index], ...diet };
    }
  }

  async delete(id: string): Promise<void> {
    this.diets = this.diets.filter(d => d.id !== id);
  }
}
