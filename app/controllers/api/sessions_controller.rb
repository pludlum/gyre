class Api::SessionsController < ApplicationController

  def new
    @user = User.new
    render :new
  end

  def create
    @user = User.find_by_credentials(
                params[:user][:username],
                params[:user][:password])
    if @user
      login(@user)
      # redirect_to ???
    else
      render json: ['Invalid username or password.'], status: 401
    end
  end

  def destroy
    if current_user
      logout
    else
      render json: ['Not logged in'], status: 404
    end
  end

end
