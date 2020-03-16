class IngredLinesController < ApiController
  before_action :set_ingred_line, only: [:show, :update, :destroy]

  # GET /ingred_lines
  def index
    @ingred_lines = IngredLine.all

    render json: @ingred_lines
  end

  # GET /ingred_lines/1
  def show
    render json: @ingred_line
  end

  # POST /ingred_lines
  def create
    @ingred_line = IngredLine.new(ingred_line_params)

    if @ingred_line.save
      render json: @ingred_line, status: :created, location: @ingred_line
    else
      render json: @ingred_line.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /ingred_lines/1
  def update
    if @ingred_line.update(ingred_line_params)
      render json: @ingred_line
    else
      render json: @ingred_line.errors, status: :unprocessable_entity
    end
  end

  # DELETE /ingred_lines/1
  def destroy
    @ingred_line.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_ingred_line
      @ingred_line = IngredLine.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def ingred_line_params
      params.require(:ingred_line).permit(:ingredient_id,:recipe_id, :qty)
    end
end