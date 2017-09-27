class Api::AnnotationsController < ApplicationController

  before_action :ensure_logged_in, except: %i[index show]



  def index
    @annotations = Annotation.all.where(poem_id: params[:poem_id])
  end

  def create
    @annotation = Annotation.new(annotation_params)
    @annotation.user_id = current_user.id
    if @annotation.save
      render "api/annotations/show"
    else
      render json: ["Annotation creation error"], status: 422
    end
  end

  def show
    @annotation = Annotation.includes(:user, :votes).find(params[:id])
    if @annotation
      render "api/annotations/show"
    else
      render json: ["Annotation not found"], status: 404
    end
  end

  def update
    @annotation = Annotation.find(params[:id])
    if @annotation && @annotation.update_attributes(annotation_params)
      @annotation.save
      render "api/annotations/show"
    else
      render json: ["Annotation not found"], status: 404
    end
  end

  def destroy
    @annotation = Annotation.find(params[:id])
    @annotation.delete
    render "api/annotations/show"
  end

  private

  def annotation_params
    params.require(:annotation).permit(
      :start_idx,
      :end_idx,
      :body,
      :poem_id,
      :source_text
    )
  end
end
