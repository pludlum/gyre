# == Schema Information
#
# Table name: votes
#
#  id            :integer          not null, primary key
#  user_id       :integer          not null
#  annotation_id :integer          not null
#  value         :integer          default(0), not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Vote < ApplicationRecord
  validates :user_id, :annotation_id, :value, presence: true
  validates_uniqueness_of :user_id, scope: :annotation_id

  #  ----- Associations -------

  belongs_to :user

  belongs_to :annotation

  # ----- Methods -------

end
