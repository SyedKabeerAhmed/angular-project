Angular CLI

1. Install NgRx and Schematics
   npm install @ngrx/{store,effects,entity,store-devtools}
   npm install @ngrx/schematics -g
   ng add @ngrx/schematics

2. Generate Store
   ng generate store State --root --module app.module.ts

3. Generate Action
   ng generate action User

4. Generate Reducer
   ng generate reducer User --reducers reducers/index.ts

5. Generate Selector
   ng generate selector User

6. Generate Effect
   ng generate effect User --root --module app.module.ts
