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

require 'test_helper'

class PoemTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
