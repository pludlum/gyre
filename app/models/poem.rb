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

  after_initialize :ensure_author_id, :ensure_body


  def ensure_author_id
    poet = Poet.find_by(name: self.author)
    self.author_id ||= poet.id
  end

  def ensure_body
    new_body = ""
    self.lines.each do |line|
      new_body += line + "\n"
    end

    self.body ||= new_body
  end


end
