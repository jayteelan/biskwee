class Ingredient < ApplicationRecord
	has_many :ingred_lines
	has_many :recipes. :through=>:ingred_lines
end
