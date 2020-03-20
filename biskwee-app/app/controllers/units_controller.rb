class UnitsController < ApiController
  before_action :set_unit, only: [:show, :update, :destroy]

  # GET /units
  def index
    @units = Unit.all

    render json: @units
  end

  # GET /units/1
  def show
    render json: @unit
  end
end
