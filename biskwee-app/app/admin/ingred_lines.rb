ActiveAdmin.register IngredLine do
	permit_params :recipe_id,:qty, :unit_id, :ingredient_id
  
end
