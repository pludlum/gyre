class Api::PoemsController < ApplicationController


  def index
    @poems = Poem.where(author_id: params[:poet_id]).limit(5)
  end

  def show
    @poem = Poem.find(params[:id])
    if @poem
      render "api/poems/show"
    else
      render json: ["Poem not found."], status: 404
    end
  end

end
