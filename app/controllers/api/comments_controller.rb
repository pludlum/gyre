class Api::CommentsController < ApplicationController

  def index
    @comments = Comment.where(annotation_id: params[:annotation_id])
    render 'api/comments/index'
  end

  def create
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user
    if @comment.save
      render JSON: @comment, status: 200
    else
      render JSON: @comment.errors.full_messages, status: 422
    end
  end

  def destroy
    @comment.find(params[:id])
    @comment.delete
    render JSON: @comment, status: 200
  end

  def comment_params
    params.require(:comments).permit(:annotation_id, :body)
  end

end
