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
Ingredient.create!(name: "milk", category_id: 2,unit_id: 1, notes: "whole")
Ingredient.create!(name: "heavy cream", category_id: 2,unit_id: 1)
Ingredient.create!(name: "butter", category_id: 2,unit_id: 1)
Ingredient.create!(name: "nonfat milk powder", category_id: 2,unit_id: 1)
Ingredient.create!(name: "sweetened condensed milk", category_id:2,unit_id:1)

Ingredient.create!(name: "all-purpose flour", category_id: 3, unit_id: 1)
Ingredient.create!(name: "cake flour", category_id: 3, unit_id: 1)

Ingredient.create!(name: "almond paste", category_id: 4, unit_id: 1)
Ingredient.create!(name: "praline paste", category_id: 4, unit_id: 1)
Ingredient.create!(name: "peanut butter", category_id: 4, unit_id: 1, notes:"smooth")
Ingredient.create!(name: "sliced almonds", category_id: 4, unit_id: 1)

Ingredient.create!(name: "lemon juice", category_id: 5 , unit_id: 1)
Ingredient.create!(name: "lemons, zest only", category_id: 5 , unit_id: 15)
Ingredient.create!(name: "lychee puree", category_id: 5 , unit_id: 1)
Ingredient.create!(name: "mango puree", category_id: 5 , unit_id: 1)

Ingredient.create!(name: "white chocolate couverture", category_id: 6, unit_id: 1)
Ingredient.create!(name: "milk chocolate courverture", category_id: 6, unit_id: 1)
Ingredient.create!(name: "dark chocolate couverture", category_id: 6, unit_id: 1)
Ingredient.create!(name: "cocoa powder", category_id: 6, unit_id: 1)

Ingredient.create!(name: "vanilla bean", category_id: 7, unit_id: 15, notes: "halved and scraped")
Ingredient.create!(name: "matcha", category_id: 7, unit_id: 1)
Ingredient.create!(name: "Vietnamese cinnamon powder", category_id: 7, unit_id: 1)

Ingredient.create!(name: "water", category_id:8, unit_id:1)
Ingredient.create!(name: "gelatin sheet", category_id: 8, unit_id: 15, notes: "silver/160 bloom")
Ingredient.create!(name: "agar powder", category_id: 8, unit_id: 1)
Ingredient.create!(name: "ice cream stabilizer", category_id: 8, unit_id: 1, notes: "Cremodan 30")
Ingredient.create!(name: "sorbet stabilizer", category_id: 8, unit_id: 1, notes: "Cremodan 64")
Ingredient.create!(name: "baking soda", category_id: 8, unit_id: 1)
Ingredient.create!(name: "baking powder", category_id: 8, unit_id: 1)
Ingredient.create!(name:"salt",category_id:8, unit_id:1)
Ingredient.create!(name:"pastry cream", category_id:8,unit_id:1)

# Sample [Recipes]
Recipe.create!(name: "Pâte à Choux",yield_qty: 800,unit_id: 1,
method: ["Place water, milk, butter, condensed milk, and salt into saucepan and bring to a full rolling boil.",
"Add the flour all at once to the boiling mixture. Stir with wooden spoon or heatproof spatula until a
smooth mass forms.",
"Keep cooking and stirring it around over moderate heat to dry out the dough as much as possible, about
2-3 minutes.",
"Transfer dough to mixer bowl. With the paddle attachment, beat at medium speed to release steam and
cool a bit for one minute.",
"At low speed, beat in the eggs, one at a time, beating until incorporated between additions.
The dough should look smooth and glossy, stiff but not dry.",
"Transfer dough to a pastry bag with a plain tip and pipe out as desired."
],image_url: "https://assets.marthastewart.com/styles/wmax-1500/d22/mb_1008_pate_a_choux_2/mb_1008_pate_a_choux_2_horiz.jpg", notes: "yield is approximate", parent_recipes: [3])


Recipe.create!(name: "Green Tea Biscuit",yield_qty: 1,unit_id: 15,
method: [
	"Sift cake flour with matcha and reserve. Thoroughly incorporate butter into melted chocolate. Stir in egg
yolks, trimoline, and lemon zest.",
"Meanwhile, begin whipping egg whites, gradually adding sugar, to soft peaks.",
"Fold in sifted cake flour, followed by white chocolate base. Transfer into a prepared half sheet pan.",
"Bake at 325ºF for 10 to 13 minutes. Allow to cool, store wrapped under refrigeration."
],image_url: "https://3.bp.blogspot.com/-HUG2O_5yoW4/TdjlJ8Oju5I/AAAAAAAACOI/7YnrLzIWoJ4/s1600/biscocho.jpg", notes: "", parent_recipes: [])
Recipe.create!(name: "Praline Cream",yield_qty: 450,unit_id: 1,method: ["Combine butter and praline paste in a mixer bowl and whip until thoroughly combined. Slowly add
pastry cream.","Chill for use later, or store at room temperature until assembly of dessert."],image_url: "", notes: "", parent_recipes: [3])

# Recipe 1 IngredLines
IngredLine.create!(recipe_id: 1, qty: 180, unit_id:1, ingredient_id: 31)
IngredLine.create!(recipe_id: 1, qty: 120, unit_id:1, ingredient_id: 2)
IngredLine.create!(recipe_id: 1, qty: 120, unit_id:1, ingredient_id: 11)
IngredLine.create!(recipe_id: 1, qty: 30, unit_id:1, ingredient_id: 13)
IngredLine.create!(recipe_id: 1, qty: 2, unit_id:1, ingredient_id: 38)
IngredLine.create!(recipe_id: 1, qty: 150, unit_id:1, ingredient_id: 14)
IngredLine.create!(recipe_id: 1, qty: 4, unit_id:15, ingredient_id: 6)

# Recipe 2 IngredLines
IngredLine.create!(recipe_id: 2, qty: 60,unit_id: 1,ingredient_id: 15)
IngredLine.create!(recipe_id: 2, qty: 15,unit_id: 1,ingredient_id: 29)
IngredLine.create!(recipe_id: 2, qty: 150,unit_id: 1,ingredient_id: 24)
IngredLine.create!(recipe_id: 2, qty: 120,unit_id: 1,ingredient_id: 11)
IngredLine.create!(recipe_id: 2, qty: 75,unit_id: 1,ingredient_id: 8)
IngredLine.create!(recipe_id: 2, qty: 25,unit_id: 1,ingredient_id: 3)
IngredLine.create!(recipe_id: 2, qty: 1,unit_id: 15,ingredient_id: 21)
IngredLine.create!(recipe_id: 2, qty: 125,unit_id: 1,ingredient_id: 7)
IngredLine.create!(recipe_id: 2, qty: 65,unit_id: 1,ingredient_id: 1)

# Recipe 3 IngredLines
IngredLine.create!(recipe_id: 3, qty: 120, unit_id: 1,ingredient_id: 11)
IngredLine.create!(recipe_id: 3, qty: 90, unit_id: 1,ingredient_id: 17)
IngredLine.create!(recipe_id: 3, qty: 240, unit_id: 1,ingredient_id: 39)