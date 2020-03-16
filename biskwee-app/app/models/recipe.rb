class Recipe < ApplicationRecord
	belongs_to :category
	has_many :ingred_lines
	has_many :ingredients, :through=>:ingred_lines
end
