class IngredLinesController < ApiController
  before_action :set_ingred_line, only: [:show, :update, :destroy]


# GET /recipes/1/ingred_lines
def index
# recipe=Recipe.find(params[:recipe_id])
@ingred_lines=IngredLine.where(:recipe_id=>params[:recipe_id])

render json: @ingred_lines
end

  # GET /recipes/1/ingred_lines/1
	def show
		render json: @ingred_line
  end

  # POST /recipes/1/ingred_lines
  def create
    @ingred_line = IngredLine.new(ingred_line_params)

    if @ingred_line.save
			render json: @ingred_line, status: :created
			# , location: @ingred_line
    else
      render json: @ingred_line.errors, status: :unprocessable_entity
    end
	end

  # PATCH/PUT /ingred_lines/1
  # PATCH/PUT /ingred_lines/1.json
  def update
    if @ingred_line.update(ingred_line_params)
			render json: @ingred_line, status: :ok
			# , location: @ingred_line
    else
      render json: @ingred_line.errors, status: :unprocessable_entity
    end
  end

  # DELETE /ingred_lines/1
  # DELETE /ingred_lines/1.json
  def destroy
    @ingred_line.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_ingred_line
      @ingred_line = IngredLine.find(params[:id])
		end
		#  def set_recipe
    #   @recipe = Recipe.find(params[:id])
    # end

    # Only allow a list of trusted parameters through.
    def ingred_line_params
      params.require(:ingred_line).permit(:recipe_id,:qty, :unit_id, :ingredient_id)
    end
end
