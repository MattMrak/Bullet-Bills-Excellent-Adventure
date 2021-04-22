Rails.application.routes.draw do
  resources :games
  resources :scores

  # post "/scores", to: "score#create"
  # post "/scores", to: "score#new"

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
