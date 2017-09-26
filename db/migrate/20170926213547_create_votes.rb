class CreateVotes < ActiveRecord::Migration[5.1]
  def change
    create_table :votes do |t|
      t.integer :user_id, null: false, foreign_key: true
      t.integer :annotation_id, null: false, foreign_key: true
      t.integer :value, null: false, default: 0
      t.timestamps
    end
    add_index :votes, [:annotation_id, :user_id], unique: true
  end
end
