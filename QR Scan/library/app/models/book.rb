class Book < ActiveRecord::Base

  has_and_belongs_to_many :users

  validates :isbn, presence: true, length: {maximum: 13, too_long: '%{count} character count exceeded'}
  validates :isbn, presence: true, length: {minimum: 10, too_long: '%{count} character count insufficient'}
  validates :title, presence: true, length: {maximum: 1000, too_long: '%{count} character count exceeded'}

end
