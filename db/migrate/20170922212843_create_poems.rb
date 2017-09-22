class CreatePoems < ActiveRecord::Migration[5.1]
  def change
    create_table :poems do |t|
      t.string :title, null: false
      t.string :author, null: false
      t.integer :author_id, null: false
      t.text :body, null: false
      t.string :lines, array: true, default: []
      t.integer :line_count
      t.timestamps
    end
    add_index :poems, :title
    add_index :poems, :author_id
  end
end
