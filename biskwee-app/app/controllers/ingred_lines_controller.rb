class IngredLinesController < ApplicationController
  before_action :set_ingred_line, only: [:show, :update, :destroy]

  # GET /ingred_lines
  # GET /ingred_lines.json
  def index
    @ingred_lines = IngredLine.all
  end

  # GET /ingred_lines/1
  # GET /ingred_lines/1.json
  def show
  end

  # POST /ingred_lines
  # POST /ingred_lines.json
  def create
    @ingred_line = IngredLine.new(ingred_line_params)

    if @ingred_line.save
      render :show, status: :created, location: @ingred_line
    else
      render json: @ingred_line.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /ingred_lines/1
  # PATCH/PUT /ingred_lines/1.json
  def update
    if @ingred_line.update(ingred_line_params)
      render :show, status: :ok, location: @ingred_line
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

    # Only allow a list of trusted parameters through.
    def ingred_line_params
      params.require(:ingred_line).permit(:recipe, :qty, :unit, :ingredient)
    end
end
