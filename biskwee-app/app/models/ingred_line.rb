class IngredLine < ApplicationRecord
  belongs_to :recipe
  belongs_to :unit
  belongs_to :ingredient
end
