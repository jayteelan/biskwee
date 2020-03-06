# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
AdminUser.create!(email: 'admin@example.com', password: 'password', password_confirmation: 'password')

# Create [Units] of measurement
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

# Create ingredient [Categories]
Category.create!(category: "sugars and sweeteners")
Category.create!(category: "eggs and dairy")
Category.create!(category: "flours")
Category.create!(category: "nuts and pastes")
Category.create!(category: "fruits")
Category.create!(category: "chocolates")
Category.create!(category: "extracts, flavors, and colors")
Category.create!(category: "gums and additives")