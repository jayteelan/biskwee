class Unit < ApplicationRecord
	has_many :ingredients
	has_many :recipes
end