require 'test_helper'

class IngredLinesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @ingred_line = ingred_lines(:one)
  end

  test "should get index" do
    get ingred_lines_url, as: :json
    assert_response :success
  end

  test "should create ingred_line" do
    assert_difference('IngredLine.count') do
      post ingred_lines_url, params: { ingred_line: { ingredient_id_id: @ingred_line.ingredient_id_id, qty: @ingred_line.qty, recipe_id_id: @ingred_line.recipe_id_id, unit_id_id: @ingred_line.unit_id_id } }, as: :json
    end

    assert_response 201
  end

  test "should show ingred_line" do
    get ingred_line_url(@ingred_line), as: :json
    assert_response :success
  end

  test "should update ingred_line" do
    patch ingred_line_url(@ingred_line), params: { ingred_line: { ingredient_id_id: @ingred_line.ingredient_id_id, qty: @ingred_line.qty, recipe_id_id: @ingred_line.recipe_id_id, unit_id_id: @ingred_line.unit_id_id } }, as: :json
    assert_response 200
  end

  test "should destroy ingred_line" do
    assert_difference('IngredLine.count', -1) do
      delete ingred_line_url(@ingred_line), as: :json
    end

    assert_response 204
  end
end
