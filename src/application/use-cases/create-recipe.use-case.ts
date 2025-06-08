import { Recipe } from '../../domain/recipe.entity';
import { InMemoryRecipeRepository } from '../../infrastructure/repositories/in-memory-recipe.repository';

interface CreateRecipeDTO {
  title: string;
  description: string;
  ingredients: string[];
}

export class CreateRecipeUseCase {
  constructor(private repository: InMemoryRecipeRepository) {}

  async execute(data: CreateRecipeDTO): Promise<Recipe> {
    // Aqui podemos adicionar validações se quiser
    const recipe = await this.repository.create(data);
    return recipe;
  }
}
