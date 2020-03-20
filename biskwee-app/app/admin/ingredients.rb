ActiveAdmin.register Ingredient do
	permit_params :name, :category_id, :unit_id, :unit_cost, :unit_weight, :unit_volume, :notes
  
end
