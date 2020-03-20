	json.array! @r.ingredients.select('ingredients.*, ingred_lines.qty, ingred_lines.unit_id').each do |i|
	puts i.qty
	puts Unit.find(i.unit_id).name
	puts i.name
	end