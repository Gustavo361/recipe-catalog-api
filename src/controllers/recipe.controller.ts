import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { InMemoryRecipeRepository } from '../infrastructure/repositories/in-memory-recipe.repository';
import { CreateRecipeUseCase } from '../application/use-cases/create-recipe.use-case';
import { ListAllRecipesUseCase } from '../application/use-cases/list-all-recipes.use-case';
import { GetRecipeByIdUseCase } from '../application/use-cases/get-recipe-by-id.use-case';
import { RecipePresenter } from '../presenters/recipe.presenter';

@Controller('recipes')
export class RecipeController {
  private readonly repository = new InMemoryRecipeRepository();

  @Post()
  async create(@Body() body: { title: string; description: string; ingredients: string[] }) {
    const useCase = new CreateRecipeUseCase(this.repository);
    const recipe = await useCase.execute(body);
    return RecipePresenter.toHTTP(recipe);
  }

  @Get()
  async findAll() {
    const useCase = new ListAllRecipesUseCase(this.repository);
    const recipes = await useCase.execute();
    return RecipePresenter.listToHTTP(recipes);
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    const useCase = new GetRecipeByIdUseCase(this.repository);
    const recipe = await useCase.execute(id);
    if (!recipe) {
      throw new NotFoundException('Receita não encontrada');
    }
    return RecipePresenter.toHTTP(recipe);
  }
}
