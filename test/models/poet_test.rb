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

require 'test_helper'

class PoetTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
