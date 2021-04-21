class Game < ApplicationRecord
    has_many :scores

    # scope :high_score, -> { left_joins(:amount).group('score.amount').order('count(amount.score_id) desc') }

end
