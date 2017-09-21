class Api::PoetsController < ApplicationController

  def show
    @poet = Poet.find(params[:id])
    if @poet
      render "api/poets/show"
    else
      render json: ['Poet not found'], status: 404
    end
  end

end
