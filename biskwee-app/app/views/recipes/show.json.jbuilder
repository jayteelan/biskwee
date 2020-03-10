json.recipe @recipe.name
json.array @recipe.ingredients do |i|
	json.type eval i
end