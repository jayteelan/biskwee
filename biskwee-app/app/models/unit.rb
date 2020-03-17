class Unit < ApplicationRecord
	has_many :ingredients
	has_many :ingredients, :through=>:ingred_lines
	has_many :recipes
	has_many :recipes, :through=>:ingred_lines
end
