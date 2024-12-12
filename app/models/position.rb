class Position < ApplicationRecord
  belongs_to :company

  enum career: [:developer, :business_intelligence, :information_technology, :design,
                :product_management, :other, :tecnology]
  enum contract: [:clt, :pg , :match]

  has_rich_text :description # Action Text para textos longos

  validates :name, :career, :contract, :city, :state, :summary, presence: true
end
