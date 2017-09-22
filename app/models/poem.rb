# == Schema Information
#
# Table name: poems
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  author     :string           not null
#  author_id  :integer          not null
#  body       :text             not null
#  lines      :string           default([]), is an Array
#  line_count :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Poem < ApplicationRecord
  validates :title, :author, :author_id, :body, presence: true

  belongs_to :poet,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :Poet


end
