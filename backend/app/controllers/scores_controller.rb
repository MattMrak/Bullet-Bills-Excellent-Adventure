class ScoresController < ApplicationController
    def new
        #when game ends display a form with the users score & an empty field to insert their name w submit button
        @score = Score.new
    end
    def create
        #create & save the new score w the users name
        @score = Score.save
    end
    def index
        #after new score is created, display a list of all scores in descending order (highest -> lowest) and have the score that was just created highlited
        @score = Score.all
        render json: @score
    end
end

#score DB has name & amount attributes
