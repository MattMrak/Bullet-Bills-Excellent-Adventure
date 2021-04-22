class Score < ApplicationRecord
    
    belongs_to :game
    
    scope :high_score, -> { order(amount: :desc)}

end
