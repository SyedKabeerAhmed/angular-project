# ProjectAlphsa

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## Command to generate module 

ng generate module [modulename]

## Commands to generate components with modules

ng generate component products/productItem --module=products 
Register parent module in app module

**ngrx guide**
Angular CLI

1. Install NgRx and Schematics:
   npm install @ngrx/{store,effects,entity,store-devtools}

   npm install @ngrx/schematics -g

   ng add @ngrx/schematics


2. Generate Store:
   ng generate store State --root --module app.module.ts

3. Generate Action:
   ng generate action User

4. Generate Reducer:
   ng generate reducer User --reducers reducers/index.ts

5. Generate Selector:
   ng generate selector User

6. Generate Effect:
   ng generate effect User --root --module app.module.ts

