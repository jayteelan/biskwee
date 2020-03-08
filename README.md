# Biskwee

- [Overview](#Overview)
- [MVP](#MVP)
  - [MVP Goals](#MVP-Goals)
  - [MVP Libraries](#MVP-Libraries)
  - [MVP Client (Front End)](#MVP-Client-Front-End)
    - [Wireframes](#Wireframes)
    - [Component Hierarchy](#Component-Hierarchy)
    - [Component Breakdown](#Component-Breakdown)
    - [Component Estimates](#Component-Estimates)
  - [MVP Server (Back End)](#MVP-Server-Back-End)
    - [ERD Model](#ERD-Model)
    - [Data Heirarchy](#Data-Heirarchy)
- [Post-MVP](#Post-MVP)
- [Project Delivery](#Project-Delivery)
- [Code Showcase](#Code-Showcase)
- [Code Issues & Resolutions](#Code-Issues--Resolutions)

<br>

## Overview

**Biskwee** (taken from the French pronounciation of "biscuit") is a recipe management app made specifically for use by pastry chefs. It will have a database of ingredients tailored for the sweet side of the kitchen (think: fewer meats, more chocolates) and will default to metric weight units for ingredient measurements. The primary challenges anticipated for this project are setting up associations between data tables, keeping feature creep at bay, and creating a streamlined seed data set for ingredients that still has a sufficient number of entries to handle the initial set of recipes.

<br>

## MVP

<br>

### MVP Goals

At an absolute minimum, **Biskwee** will:

- have a full-CRUD backend allowing for the creation of new User and Recipe records
- include a signup/login pathway to authenticate users and allow each one a personal recipe library
- allow the user to browse their recipe library and add new recipes

<br>

### MVP Libraries

|    Library    | Description                                      |
| :-----------: | :----------------------------------------------- |
|     React     | _Create front-end user interface_                |
| React Router  | _Route between front-end component paths_        |
|     axios     | _Handle data flow between client and API server_ |
|    Formik     | _Assist with creation of recipe input form_      |
|     Rails     | _Initialize and run back-end server_             |
|    devise     | _Simplifies user auth_                           |
|  activeadmin  | _Simplifies API administration_                  |
| nested-hstore | _Adds multi-level data access to ActiveRecord_   |

<br>

### MVP Client (Front End)

#### Wireframes

![wireframes](https://i.imgur.com/msMI2C4.png)

#### Component Hierarchy

> Use this section to show your React components and the data architecture of your app.

![component hierarchy](https://i.imgur.com/DDlVNsm.png)

#### Component Breakdown

|    Component    | State | Description                                                    |
| :-------------: | :---: | :------------------------------------------------------------- |
|       App       |   n   | _Primary layout_                                               |
|      Main       |   y   | _Container for entire app; will hold core functions and state_ |
|       Nav       |   n   | _Container for navigation links and login form_                |
|      Login      |   y   | _Login form/current user/sign out_                             |
|     Content     |   n   | _Container for primary content_                                |
|   LoginFailed   |   y   | _Inform user that login as failed; login form_                 |
|    MyRecipes    |   n   | _Display all of user's recipes_                                |
|    RecipeLI     |   n   | _"Card" with summary info for an individual recipe_            |
|  AddEditRecipe  |   y   | _Form for user to input a new recipe or edit an existing one_  |
|  RecipeDetail   |   n   | _A full-page display of an individual recipe_                  |
| IngredientInput |   y   | _Input element for a recipe ingredient_                        |
|   MethodInput   |   y   | _Input element for a step in the recipe instructions_          |
| IngredientList  |   n   | _List the ingredients in a recipe_                             |
|   MethodList    |   n   | _List the steps in a recipe's instructions_                    |
|  IngredientLI   |   n   | _Layout for a single ingredient list element_                  |
|    Method LI    |   n   | _Layout for a single instruction list element_                 |

<br>

### MVP Server (Back End)

#### ERD Model

(includes some post-MVP info)
![ERD](https://i.imgur.com/4O9tt7T.png)

#### Endpoints

- POST `/user`: create a new user
- POST `/login`: authenticate user login
- GET `/user/:user_id/recipes`: index of a user's recipes
- GET `/user/:user_id/recipes/:recipe_id`: retrieve data for a specific recipe
- POST `/user/:user_id/recipes/`: add a new recipe to the database
- PUT `/user/:user_id/recipes/:recipe_id`: update an existing recipe
- DELETE `/user/:user_id/recipes/:recipe_id`: delete a recipe from the database
- GET `/ingredients`: index of all ingredients
- GET `/ingredients/:ingredient_id`: retrieve data for a specific ingredient
- POST `/ingredients`: add a new ingredient
- PUT `/ingredients/:ingredient_id`: update an existing ingredient
- DELETE `/ingredients/:ingredient_id`: delete an ingredient from the database

<br>

---

## Planning

<br>

### Timeframes

| Task                     | Priority | Estimated Time | Actual Time |
| ------------------------ | :------: | :------------: | :---------: |
| Set up server w/ CRUD    |    H     |     3 hrs      |    3 hrs    |
| Create basic seed data   |    M     |    1.5 hrs     |  2.25 hrs   |
| Set up auth backend      |    H     |    1.5 hrs     |             |
| Scaffold frontend/routes |    H     |     8 hrs      |             |
| Build out auth backend   |    M     |     3 hrs      |             |
| Build out RecipeDetail   |    H     |     12 hrs     |             |
| Build out AddEditRecipes |    H     |     8 hrs      |             |
| Build out MyRecipes      |    M     |     5 hrs      |             |
| Styling                  |    M     |     8 hrs      |             |
| Additional seed data     |    L     |      n/a       |             |
| Post-MVP                 |    L     |      n/a       |             |
| TOTAL                    |          |     50 hrs     |             |

<br>

### Schedule

| Day      | Deliverables                                            |
| -------- | ------------------------------------------------------- |
| Mar 4th  | project proposal worksheet                              |
| Mar 5th  | project pitch, build out endpoints with basic seed data |
| Mar 6th  | auth backend, scaffold frontend/routes                  |
| Mar 7th  | OFF                                                     |
| Mar 8th  | build out auth frontend                                 |
| Mar 9th  | build out RecipeDetail/IngredientList/MethodList        |
| Mar 10th | build out AddEditRecipes                                |
| Mar 11th | build out MyRecipes/RecipeLI                            |
| Mar 12th | styling                                                 |
| Mar 13th | final presentations                                     |

<br>

---

## Post-MVP

- allow user to add ingredients to database
- add tags to recipes
- unit conversions (e.g., oz to g, cups to L)
- support for subrecipes (i.e., recipes used as ingredients in larger recipes)
- support for recipe cost analysis
- create printer-friendly recipes/export recipes to PDF
- share recipes between users

<br>

---

## Project Change Log

> This section should be expanded and revised as you work on your project.

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.

---
