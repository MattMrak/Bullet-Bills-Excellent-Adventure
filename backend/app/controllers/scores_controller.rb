class ScoresController < ApplicationController

    def index
        @scores = Score.order(amount: :desc).slice(0,10)
        render json: @scores
    end

    def create
        @score = Score.create(score_params)
        render json: @score
    end

    def show
        @score = Score.find_by(params[:id])
        render json: @score
    end

    private
    
    def score_params
        params.require(:score).permit(:name, :amount, :game_id)
    end

end