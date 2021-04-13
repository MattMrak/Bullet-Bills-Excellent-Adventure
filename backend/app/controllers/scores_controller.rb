class ScoresController < ApplicationController
    def index
        #after new score is created, display a list of all scores in descending order (highest -> lowest) and have the score that was just created highlited
        @scores = Score.all
        render json: @scores
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
        params.permit(:name, :amount)
    end
end

#score DB has name & amount attributes
