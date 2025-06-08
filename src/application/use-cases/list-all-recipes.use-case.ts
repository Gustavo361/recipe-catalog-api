import { Recipe } from '../../domain/recipe.entity';
import { InMemoryRecipeRepository } from '../../infrastructure/repositories/in-memory-recipe.repository';

export class ListAllRecipesUseCase {
  constructor(private repository: InMemoryRecipeRepository) {}

  async execute(): Promise<Recipe[]> {
    const recipes = await this.repository.findAll();
    return recipes;
  }
}
