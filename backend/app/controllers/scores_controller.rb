class ScoresController < ApplicationController

    def index
        #after new score is created, display a list of all scores in descending order (highest -> lowest) and have the score that was just created highlited
        @scores = Score.all.high_score
        render json: @scores
        #scope score amounts in order from highest to lowest
    end

    def create
        #create & save the new score w the users name
        @score = Score.create(score_params)
        render json: @score
    end

    def show
        #show each individual score
        @score = Score.find_by(params[:id])
        render json: @score
    end

    private
    
    def score_params
        params.require(:score).permit(:name, :amount, :game_id)
    end

end

#score DB has name & amount attributes
