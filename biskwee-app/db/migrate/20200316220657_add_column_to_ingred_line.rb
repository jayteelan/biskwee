class AddColumnToIngredLine < ActiveRecord::Migration[6.0]
	def change
		add_column :ingred_lines, :recipe_id, :integer
		add_column :ingred_lines, :ingredient_id, :integer
		add_column :ingred_lines, :qty, :string
  end
end
