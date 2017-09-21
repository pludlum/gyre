class AddPoetDescription < ActiveRecord::Migration[5.1]
  def change
    add_column :poets, :description, :string
  end
end
