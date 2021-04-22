Rails.application.routes.draw do
  resources :games
  resources :scores

  get '/scores/high_score' => 'scores#high_score'

  # post "/scores", to: "score#create"
  # post "/scores", to: "score#new"

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
