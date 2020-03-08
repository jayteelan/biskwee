class CreateIngredients < ActiveRecord::Migration[6.0]
  def change
    create_table :ingredients do |t|
      t.string :name
      t.references :category, null: false, foreign_key: true
      t.references :unit, null: false, foreign_key: true
      t.float :unit_cost
      t.float :unit_weight
      t.float :unit_volume
      t.text :notes

      t.timestamps
    end
  end
end
