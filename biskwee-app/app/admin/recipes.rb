ActiveAdmin.register Recipe do
		permit_params :name, :yield_qty, :unit_id, {:method=>[]}, :notes, {:parent_recipes=>[]}
  
end
