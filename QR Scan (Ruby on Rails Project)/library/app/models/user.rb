class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
        :recoverable, :rememberable, :trackable, :validatable

  has_and_belongs_to_many :books

  validates :first_name, length: {maximum: 255, too_long: "%{count} character count exceeded"}
  validates :last_name, length: {maximum: 255, too_long: "%{count} character count exceeded"}

end
