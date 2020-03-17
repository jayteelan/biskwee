class Ingredient < ApplicationRecord
  belongs_to :category
	belongs_to :unit
	has_many :recipes
	has_many :recipes, :through=>:ingred_lines
end
