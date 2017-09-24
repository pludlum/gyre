class CreateAnnotations < ActiveRecord::Migration[5.1]
  def change
    create_table :annotations do |t|
      t.integer :user_id, null: false, foreign_key: true
      t.integer :poem_id, null: false, foreign_key: true
      t.integer :start_idx, null: false
      t.integer :end_idx, null: false
      t.text :body, null: false
      t.integer :rating, null: false, default: 0
      t.timestamps
    end
    add_index :annotations, :poem_id
  end
end
