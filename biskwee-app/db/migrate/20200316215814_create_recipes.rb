class CreateRecipes < ActiveRecord::Migration[6.0]
  def change
    create_table :recipes do |t|
      t.string :name
      t.references :category, null: false, foreign_key: true
      t.text :method, array:true, default:[]

      t.timestamps
    end
  end
end
