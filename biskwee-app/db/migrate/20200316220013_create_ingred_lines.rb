class CreateIngredLines < ActiveRecord::Migration[6.0]
  def change
    create_table :ingred_lines do |t|

      t.timestamps
    end
  end
end
