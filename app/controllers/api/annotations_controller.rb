class Api::AnnotationsController < ApplicationController

  before_action only:

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
    @annotation = Annotation.find(params[:id])
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
      render "api/annotation/show"
    else
      render json: ["Annotation not found"], status: 404
    end
  end

  def delete
    @annotation = Annotation.find(params[:id])
    @annotation.delete
  end

  private

  def annotaion_params
    params.require(:annotation).permit(
      :start_idx,
      :end_idx,
      :body,
      :poem_id,
      :source_text
    )
  end
end