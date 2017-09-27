class Api::VotesController < ApplicationController

  def create
    @vote = Vote.new(vote_params)
    @vote.user_id = current_user.id
    if @vote.save
      @vote.annotation.change_rating(@vote.value)
      render 'api/votes/show'
    else
      render json: @vote.errors.full_messages, status: 422
    end
  end

  def destroy
    @vote = Vote.find(params[:id])
    @vote.delete!
    render json: ["Vote deleted!"]
  end

  def vote_params
    params.require(:vote).permit(:annotation_id, :value)
  end

end
