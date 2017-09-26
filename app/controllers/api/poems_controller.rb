class Api::PoemsController < ApplicationController

  def top_index
    @poems = Poem.joins(:annotations).group("poems.id").order("count(annotations.id) DESC")
    render 'api/poems/index'
  end

  def index
    @poems = Poem.where(author_id: params[:poet_id])
    render 'api/poems/index'
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
    render json: ["Poem creation error"], status: 422 unless @poem.save
  end
  # -------------------------------------------------------------

  private

  def poem_params
    params.require(:poem).permit(
      :title,
      :line_count,
      :author,
      :body,
      :author_id,
      lines: [],
    )
  end

end
