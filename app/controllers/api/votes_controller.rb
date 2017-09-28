class Api::VotesController < ApplicationController

  def create
    @vote = Vote.new(vote_params)
    @vote.user_id = current_user.id
    if @vote.save
      @vote.annotation.change_rating(@vote.value)
      render json: @vote, status: 200
    else
      render json: @vote.errors.full_messages, status: 422
    end
  end

  # def index
  #   @votes = Annotation.find(params[:annotation_id]).votes
  #   render "api/votes/index"
  # end

  # def update
  #   @vote = Vote.find(params[:id])
  #   if @vote && @vote.update_attributes(vote_params)
  #     render json: ["Updated"], status: 200
  #   else
  #     render json: @vote.errors.full_messages, status: 422
  #   end
  # end

  def destroy
    @vote = Vote.find(params[:id])
    @vote.annotation.change_rating((@vote.value) * -1)
    @vote.delete
    render json: ["Vote deleted!"]
  end

  def vote_params
    params.require(:vote).permit(:annotation_id, :value)
  end

end
