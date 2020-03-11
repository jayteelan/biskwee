json.name @recipe.name
json.yield_qty @recipe.yield_qty
json.ingredients @recipe.ingredients do |i|
	json.line eval i
end
json.method @recipe.method do |m|
	json.step m
end
json.image_url @recipe.image_url
json.notes @recipe.notes
json.parent_recipes @recipe.parent_recipes do |p|
	json.parent p
end