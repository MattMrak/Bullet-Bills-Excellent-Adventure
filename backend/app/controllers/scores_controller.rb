class ScoresController < ApplicationController
    def new
        #when game ends display a form with the users score & an empty field to insert their name w submit button
        @score = Score.new
    end
end