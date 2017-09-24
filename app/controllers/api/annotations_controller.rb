class Api::AnnotationsController < ApplicationController

  def create
    @annotation = Annotation.new(annotation_params)


  end

  def show

  end

  def update

  end

  def delete

  end

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
