class Recipe < ApplicationRecord
	belongs_to :unit
	has_many :ingred_lines
	has_many :ingredients, :through=>:ingred_lines
end
