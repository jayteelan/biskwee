class CreateUnits < ActiveRecord::Migration[6.0]
  def change
    create_table :units do |t|
      t.string :name
      t.string :abbrev
      t.float :in_grams
      t.float :in_liters

      t.timestamps
    end
  end
end
