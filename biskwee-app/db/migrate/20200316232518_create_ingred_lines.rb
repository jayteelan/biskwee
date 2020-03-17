class CreateIngredLines < ActiveRecord::Migration[6.0]
  def change
    create_table :ingred_lines do |t|
      t.references :recipe, null: false, foreign_key: true
      t.float :qty
      t.references :unit, null: false, foreign_key: true
      t.references :ingredient, null: false, foreign_key: true

      t.timestamps
    end
  end
end
