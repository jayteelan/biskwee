json.extract! ingred_line, :id, :recipe_id, :qty, :unit_id, :ingredient_id, :created_at, :updated_at
json.url ingred_line_url(ingred_line, format: :json)
