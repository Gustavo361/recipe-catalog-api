import { Module } from '@nestjs/common';
import { RecipeController } from './controllers/recipe.controller';

@Module({
  imports: [],
  controllers: [RecipeController],
  providers: [],
})
export class AppModule {}
