# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
AdminUser.create!(email: 'admin@example.com', password: 'password', password_confirmation: 'password')

# Populate [Units] of measurement
Unit.create!(name: "gram",abbrev: "g",in_grams: 1)
Unit.create!(name: "kilogram",abbrev: "kg",in_grams: 1000)
Unit.create!(name: "ounce",abbrev: "oz",in_grams: 28.35)
Unit.create!(name: "pound",abbrev: "lb",in_grams: 454)

Unit.create!(name: "milliliters",abbrev: "mL",in_liters: 0.001)
Unit.create!(name: "liters",abbrev: "L",in_liters: 1)
Unit.create!(name: "teaspoon",abbrev: "tsp",in_liters: 0.005)
Unit.create!(name: "tablespoon",abbrev: "Tb",in_liters:0.015)
Unit.create!(name: "fluid ounce",abbrev: "fl oz",in_liters: 0.02957)
Unit.create!(name: "cup",abbrev: "c",in_liters: 0.24)
Unit.create!(name: "pint",abbrev: "pt",in_liters: 0.4732)
Unit.create!(name: "quart",abbrev: "qt",in_liters:0.946)
Unit.create!(name: "gallon",abbrev: "gal",in_liters: 3.7854)

Unit.create!(name: "recipe",abbrev: "recipe")
Unit.create!(name: "each",abbrev: "ea")
Unit.create!(name: "as needed",abbrev: "as needed")
Unit.create!(name: "pinch",abbrev: "pinch")
Unit.create!(name: "drop",abbrev: "drop")

# Populate ingredient [Categories]
Category.create!(category: "sugars and sweeteners")
Category.create!(category: "eggs and dairy")
Category.create!(category: "flours")
Category.create!(category: "nuts")
Category.create!(category: "fruits")
Category.create!(category: "chocolates")
Category.create!(category: "extracts, flavors, and colors")
Category.create!(category: "gums, additives, and misc.")

# Populate [Ingredients]
Ingredient.create!(name: "granulated sugar", category_id: 1, unit_id:1,notes:"white")
Ingredient.create!(name: "powdered sugar", category_id: 1, unit_id:1)
Ingredient.create!(name: "Trimoline", category_id: 1, unit_id:1)
Ingredient.create!(name: "glucose syrup", category_id: 1, unit_id:1)
Ingredient.create!(name: "glucose powder", category_id: 1, unit_id:1)

Ingredient.create!(name: "egg", category_id: 2,unit_id: 15, notes: "whole, large")
Ingredient.create!(name: "egg white", category_id: 2,unit_id: 15, notes: "large")
Ingredient.create!(name: "egg yolk", category_id: 2,unit_id: 15, notes:"large")
Ingredient.create!(name: "milk", category_id: 2,unit_id: 5, notes: "whole")
Ingredient.create!(name: "heavy cream", category_id: 2,unit_id: 5)
Ingredient.create!(name: "butter", category_id: 2,unit_id: 1)
Ingredient.create!(name: "nonfat milk powder", category_id: 2,unit_id: 1)

Ingredient.create!(name: "all-purpose flour", category_id: 3, unit_id: 1)
Ingredient.create!(name: "cake flour", category_id: 3, unit_id: 1)

Ingredient.create!(name: "almond paste", category_id: 4, unit_id: 1)
Ingredient.create!(name: "praline paste", category_id: 4, unit_id: 1)
Ingredient.create!(name: "peanut butter", category_id: 4, unit_id: 1, notes:"smooth")
Ingredient.create!(name: "almond flour", category_id: 4, unit_id: 1)

Ingredient.create!(name: "lemon juice", category_id: 5 , unit_id: 1)
Ingredient.create!(name: "lemons, zest only", category_id: 5 , unit_id: 15)
Ingredient.create!(name: "lychee puree", category_id: 5 , unit_id: 1)
Ingredient.create!(name: "mango puree", category_id: 5 , unit_id: 1)

Ingredient.create!(name: "white chocolate couverture", category_id: 6, unit_id: 1)
Ingredient.create!(name: "milk chocolate courverture", category_id: 6, unit_id: 1)
Ingredient.create!(name: "dark chocolate couverture", category_id: 6, unit_id: 1)
Ingredient.create!(name: "cocoa powder", category_id: 6, unit_id: 1)

Ingredient.create!(name: "vanilla bean", category_id: 7, unit_id: 5, notes: "halved and scraped")
Ingredient.create!(name: "Earl Grey tea leaves", category_id: 7, unit_id: 1)
Ingredient.create!(name: "Vietnamese cinnamon powder", category_id: 7, unit_id: 1)

Ingredient.create!(name: "gelatin sheet", category_id: 8, unit_id: 5, notes: "silver/160 bloom")
Ingredient.create!(name: "agar powder", category_id: 8, unit_id: 1)
Ingredient.create!(name: "ice cream stabilizer", category_id: 8, unit_id: 1, notes: "Cremodan 30")
Ingredient.create!(name: "sorbet stabilizer", category_id: 8, unit_id: 1, notes: "Cremodan 64")
Ingredient.create!(name: "baking soda", category_id: 8, unit_id: 1)
Ingredient.create!(name: "baking powder", category_id: 8, unit_id: 1)