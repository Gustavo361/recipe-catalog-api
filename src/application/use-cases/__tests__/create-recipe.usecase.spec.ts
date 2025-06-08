import { CreateRecipeUseCase } from '../create-recipe.use-case';
import { InMemoryRecipeRepository } from '../../../infrastructure/repositories/in-memory-recipe.repository';

describe('CreateRecipeUseCase', () => {
  let useCase: CreateRecipeUseCase;
  let repository: InMemoryRecipeRepository;

  beforeEach(() => {
    repository = new InMemoryRecipeRepository();
    useCase = new CreateRecipeUseCase(repository);
  });

  it('should create a recipe successfully', async () => {
    const recipeData = {
      title: 'Teste de Receita',
      description: 'Descrição de teste',
      ingredients: ['ingrediente1', 'ingrediente2'],
    };

    const recipe = await useCase.execute(recipeData);

    expect(recipe).toHaveProperty('id');
    expect(recipe.title).toBe(recipeData.title);
    expect(recipe.description).toBe(recipeData.description);
    expect(recipe.ingredients).toEqual(recipeData.ingredients);
    expect(recipe.createdAt).toBeInstanceOf(Date);
    expect(recipe.updatedAt).toBeInstanceOf(Date);
  });
});
