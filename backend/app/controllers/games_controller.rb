class GamesController < ApplicationController
    def index
        #store images for character & blocks (bullet bill & mario pipes)
        @game = Game.all
        render json: @game
    end
end

#game DB has image attribute

