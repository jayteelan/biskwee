class Ingredient < ApplicationRecord
  belongs_to :category
	belongs_to :unit
	has_many :ingred_lines
	# has_many :recipes, :through=>:ingred_lines
	has_many :recipes,  -> {extending IngredLines }, through: :ingred_lines
end
