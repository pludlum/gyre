# == Schema Information
#
# Table name: poets
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  img_url    :string           not null
#  banner_url :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Poet < ApplicationRecord
end
