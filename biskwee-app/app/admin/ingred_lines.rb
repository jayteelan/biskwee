ActiveAdmin.register IngredLine do
	permit_params :recipe_id,:qty, :unit_id, :ingredient_id

  # See permitted parameters documentation:
  # https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
  #
  # Uncomment all parameters which should be permitted for assignment
  #
  # permit_params :name, :category_id, :unit_id, :unit_cost, :unit_weight, :unit_volume, :notes
  #
  # or
  #
  # permit_params do
  #   permitted = [:name, :category_id, :unit_id, :unit_cost, :unit_weight, :unit_volume, :notes]
  #   permitted << :other if params[:action] == 'create' && current_user.admin?
  #   permitted
  # end
  
end
