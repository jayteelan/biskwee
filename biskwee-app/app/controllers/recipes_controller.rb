class RecipesController < ApiController
  before_action :set_recipe, only: [:show, :update, :destroy, :add_ingredient]

  # GET /recipes
  def index
    @recipes = Recipe.all

    render json: @recipes
  end

  # GET /recipes/1
	def show

  end

  # POST /recipes
  def create
    @recipe = Recipe.new(recipe_params)

    if @recipe.save
      render json: @recipe, status: :created, location: @recipe
    else
      render json: @recipe.errors, status: :unprocessable_entity
    end
	end
	
	def add_ingredient
		@r=Recipe.find(2)
	end

	def remove_ingredient
	end

  # PATCH/PUT /recipes/1
	def update
		@recipe=Recipe.find(params[:id])
		@recipe.update(recipe_params)
    if @recipe
      render json: @recipe
    else
      render json: @recipe.errors, status: :unprocessable_entity
    end
  end

  # DELETE /recipes/1
  def destroy
    @recipe.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_recipe
      @recipe = Recipe.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def recipe_params
      params.require(:recipe).permit(:name, :yield_qty, :unit_id, {:method=>[]}, :image_url, :notes, {:parent_recipes=>[]})
    end
end
