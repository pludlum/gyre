class Api::UsersController < ApplicationController

  def new
    @user = User.new
    render :new
  end

  def create
    @user = User.new(user_params)
    @user.img_url = "avatar.jpg"
    if @user.save
      login(@user)
      # redirect_to ????
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
