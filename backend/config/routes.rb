Rails.application.routes.draw do
  get '/scores' => 'scores#new'
  post '/scores' => 'scores#create'
  
  resources :games
  resources :scores

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
