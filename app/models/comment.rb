# == Schema Information
#
# Table name: comments
#
#  id            :integer          not null, primary key
#  body          :string           not null
#  annotation_id :integer          not null
#  user_id       :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Comment < ApplicationRecord
  validates :body, :annotation_id, :user_id, presence: true

  #  ----- Associations -------

  belongs_to :annotation

  belongs_to :user

  # ----- Methods -------

end
