# == Schema Information
#
# Table name: annotations
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  poem_id    :integer          not null
#  start_idx  :integer          not null
#  end_idx    :integer          not null
#  body       :text             not null
#  rating     :integer          default(0), not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Annotation < ApplicationRecord
  validates :user_id,
            :poem_id,
            :start_idx,
            :end_idx,
            :body,
            :rating,
            presence: true

  #  ----- Associations -------

  belongs_to :poem

  belongs_to :user

  # ----- Methods -------


end
