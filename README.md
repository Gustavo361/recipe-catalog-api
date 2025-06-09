<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

A simple and functional API for registering recipes, developed with **NestJS** and **TypeScript**. It uses an in-memory repository (fake DB) and is ready to deploy in production.

# Access
## online: [https://recipe-catalog-api.onrender.com](https://recipe-catalog-api.onrender.com/)
## local: [http://localhost:3000](http://localhost:3000/)

## How to Create a Recipe

Make a POST request (for example, using Postman) to  
`http://localhost:3000/recipes` or  
`https://recipe-catalog-api.onrender.com/recipes`, for example:

```json
{
  "name": "Chocolate Cake",
  "ingredients": ["flour", "sugar", "cocoa powder", "eggs", "butter"],
  "instructions": "Mix ingredients, bake at 180°C for 30 minutes."
}
```
## How to View Recipes

- Access **`/recipes`** to see all recipes.

- Access **`/recipes/:id`** to find a recipe by its ID.  
  For example: `http://localhost:3000/recipes/cbafc1f9-b915-4a05-aa76-39ed8289be02` or  
  `https://recipe-catalog-api.onrender.com/recipes/cbafc1f9-b915-4a05-aa76-39ed8289be02`

## Project setup

```bash
$ pnpm install
```

## Compile and run the project
```
$ pnpm start:dev
```

# Build for production
pnpm build

## Run tests

```bash
# unit tests
$ pnpm test