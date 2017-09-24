class AddColumnAnnotation < ActiveRecord::Migration[5.1]
  def change
    add_column :annotations, :source_text, :text
  end
end
