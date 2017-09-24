# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  img_url         :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  validates :username, :password_digest, :session_token, presence: true
  validates :password, length: {minimum: 6, allow_nil: true}

  after_initialize :ensure_session_token, :ensure_avatar
  attr_reader :password

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)

    user && user.is_password?(password) ? user : nil
  end

  def ensure_avatar
    graph_styles = ["hexa", "hexa16"]
    graph_colors = ["berrypie", "frogideas", "duskfalling", "heatwave", "summerwarmth", "bythepool"]
    num_colors = [3, 4]
    style = graph_styles.sample
    color = graph_colors.sample
    color_num = num_colors.sample

    self.img_url ||= "http://www.tinygraphs.com/labs/isogrids/hexa16/#{self.username}?theme=#{color}&numcolors=#{color_num}&size=220&fmt=svg"
  end
end
