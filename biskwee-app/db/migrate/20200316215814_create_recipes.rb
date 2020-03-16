class CreateRecipes < ActiveRecord::Migration[6.0]
	serialize :my_property, ActiveRecord::Coders::NestedHstore
  def change
    create_table :recipes do |t|
      t.string :name
			t.references :category, null: false, foreign_key: true
			t.text :method, array:true, default:[]
			t.text :method, array:true, default:[]
      t.string :image_url

      t.timestamps
    end
  end
end
