class Company < ApplicationRecord
  belongs_to :user
  has_one_attached :logo

  has_many :positions


  validates :name, presence: true
  validates :url, presence: true


end
