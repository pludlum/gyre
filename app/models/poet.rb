# == Schema Information
#
# Table name: poets
#
#  id          :integer          not null, primary key
#  name        :string           not null
#  img_url     :string           not null
#  banner_url  :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  description :string
#

class Poet < ApplicationRecord
  validates :name, uniqueness: true, presence: true
  validates :img_url, presence: true
  validates :banner_url, presence: true
  validates :description, presence: true

  #  ----- Associations -------

  has_many :poems,
           primary_key: :id,
           foreign_key: :author_id,
           class_name: :Poem

  # ----- Methods -------

end
