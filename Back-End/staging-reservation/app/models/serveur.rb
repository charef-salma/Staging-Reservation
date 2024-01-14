class Serveur < ApplicationRecord
    has_many :reservers , dependent: :destroy
    #  has_one :reservation
    validates :nom, presence: true
    validates :status, presence: true
    # enum status: { free: 1, booked: 2 }, _default: 'free'
    

    # enum status: { free: 1, booked: 2 }, _default: 'free'
   
end
