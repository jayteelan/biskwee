class CreateRecipes < ActiveRecord::Migration[6.0]
  def change
    create_table :recipes do |t|
      t.string :name
      t.float :yield_qty
      t.references :unit, null: false, foreign_key: true
      t.array :ingredients
      t.array :method
      t.string :image_url
      t.text :notes
      t.array :parent_recipes

      t.timestamps
    end
  end
end
