class Api::VotesController < ApplicationController

  def create
    @vote = Vote.new(vote_params)
    @vote.user_id = current_user.id
    if @vote.save
      @vote.annotation.change_rating(@vote.value)
      render 'api/votes/show'
    else
      render json: ["Vote creation error"], status: 422
    end
  end

  # def show
  #   @vote = Vote.find(params[:id])
  #   if @vote
  #     render 'api/votes/show'
  #   else
  #     render json: ["Vote creation error"], status: 404
  #   end
  # end


  def destroy

  end

  def vote_params
    params.require(:vote).permit(:annotation_id, :value)
  end

end
