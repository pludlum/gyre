class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    @user.img_url = "http://www.tinygraphs.com/labs/isogrids/hexa16/#{@user.username}?theme=frogideas&numcolors=4&size=220&fmt=svg"
    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
