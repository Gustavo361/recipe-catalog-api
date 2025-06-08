import { Recipe } from '../../domain/recipe.entity';
import { v4 as uuidv4 } from 'uuid';

export class InMemoryRecipeRepository {
  private recipes: Recipe[] = [];

  async create(
    recipeData: Omit<Recipe, 'id' | 'createdAt' | 'updatedAt'>,
  ): Promise<Recipe> {
    const newRecipe: Recipe = {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      id: uuidv4() as string,
      createdAt: new Date(),
      updatedAt: new Date(),
      ...recipeData,
    };
    this.recipes.push(newRecipe);
    await Promise.resolve();
    return newRecipe;
  }

  async findAll(): Promise<Recipe[]> {
    await Promise.resolve();
    return this.recipes;
  }

  async findById(id: string): Promise<Recipe | null> {
    const recipe = this.recipes.find(r => r.id === id);
    await Promise.resolve();
    return recipe || null;
  }
}
