import { Module } from '@nestjs/common';
import { RecipeController } from './controllers/recipe.controller';
import { AppService } from './app.service';
import { AppController } from './app.controller';

@Module({
  imports: [],
  controllers: [AppController, RecipeController],
  providers: [AppService],
})
export class AppModule {}
