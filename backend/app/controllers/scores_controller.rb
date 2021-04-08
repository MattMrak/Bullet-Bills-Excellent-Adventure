class ScoresController < ApplicationController
    def new
        #when game ends display a form with the users score & an empty field to insert their name w submit button
        @score = Score.new
    end
    def create
        #create & save the new score w the users name
        @score = Score.save
    end
end