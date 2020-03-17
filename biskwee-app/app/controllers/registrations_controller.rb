require 'pry'
class RegistrationsController < Devise::RegistrationsController
  respond_to :json

	def create
		# binding.pry
    @user = User.new(sign_up_params)
    if @user.save
      render json: @user
    else
      render json: { errors: @user.errors }
    end
  end

  private

  def sign_up_params
    params.permit(:email, :password, :password_confirmation)
  end
end