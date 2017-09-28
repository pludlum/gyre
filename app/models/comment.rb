class Comment < ApplicationRecord
  validates :body, :annotation_id, :user_id, presence: true

  #  ----- Associations -------

  belongs_to :annotation

  belongs_to :user

  # ----- Methods -------

end
