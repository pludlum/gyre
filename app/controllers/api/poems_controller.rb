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

  # ------- #create for potentially seeding from poetry.db -------

  def create
    @poem = Poem.new(poem_params)
    render json: ["Poem creation error"], status: 422 unless @poem.create
  end

  def poem_params
    params.require(:poem).permit(
      :title,
      :lines,
      :line_count,
      :author,
      :body,
      :author_id
    )
  end

end
