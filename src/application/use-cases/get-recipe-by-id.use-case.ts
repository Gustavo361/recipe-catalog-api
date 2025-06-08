import { Recipe } from '../../domain/recipe.entity';
import { InMemoryRecipeRepository } from '../../infrastructure/repositories/in-memory-recipe.repository';

export class GetRecipeByIdUseCase {
  constructor(private repository: InMemoryRecipeRepository) {}

  async execute(id: string): Promise<Recipe | null> {
    const recipe = await this.repository.findById(id);
    return recipe;
  }
}
