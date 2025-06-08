import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getWelcome() {
    return {
      status: 200,
      message: 'Bem-vindo à API de Catálogo de Receitas!',
      linkedin: 'https://www.linkedin.com/in/gustavo-faustino-2659331ba/',
      github: 'https://github.com/Gustavo361/recipe-catalog-api',
    };
  }
}
