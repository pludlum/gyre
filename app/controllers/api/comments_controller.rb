class Api::CommentsController < ApplicationController

  def index
    @comments = Comment.where(annotation_id: params[:annotation_id]).includes(:user)
    render 'api/comments/index'
  end

  def create
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id
    if @comment.save!
      render 'api/comments/show'
    else
      render json: ["Comment creation error"], status: 422
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    @comment.delete
    render json: @comment, status: 200
  end

  def comment_params
    params.require(:comment).permit(:annotation_id, :body)
  end

end
