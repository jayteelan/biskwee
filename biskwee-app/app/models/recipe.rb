class Recipe < ApplicationRecord
	belongs_to :unit
	has_many :ingredients
	has_many :ingredients, :through=>:ingred_lines
end
