class CreatePoets < ActiveRecord::Migration[5.1]
  def change
    create_table :poets do |t|
      t.string :name, null: false
      t.string :img_url, null: false
      t.string :banner_url, null: false
      t.timestamps
    end
    add_index :poets, :name, unique: true
  end
end
