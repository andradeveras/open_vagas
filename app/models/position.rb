class Position < ApplicationRecord
  belongs_to :company

  enum career: [:developer, :business_intelligence, :information_technology, :design,
                :product_management, :other, :tecnology]
  enum contract: [:clt, :pg , :match]

  validates :name, :career, :contract, :city, :state, :summary, :description, presence: true
end
