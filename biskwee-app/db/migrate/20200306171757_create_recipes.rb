class CreateRecipes < ActiveRecord::Migration[6.0]
  def change
    create_table :recipes do |t|
      t.string :name
      t.float :yield_qty
      t.references :unit, null: false, foreign_key: true
			# t.text :ingredients, array:true, default:[]
      t.text :method, array:true, default:[]
      t.string :image_url
      t.text :notes
			t.text :parent_recipes, array:true, default:[]
			

      t.timestamps
    end
  end
end
