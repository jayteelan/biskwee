class Recipe < ApplicationRecord
	belongs_to :unit
	has_many :ingred_lines, dependent: :delete_all
	has_many :ingredients, :through=>:ingred_lines
end
