Rails.application.routes.draw do
  get 'applicants/index'
  get 'applicants/new'
  
  resources :companies, only: [:new, :edit, :update, :create]
  resources :positions
  resources :applicants, only: [:index, :new, :create]

  devise_for :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  get 'home', to: 'home#index'
  root to: 'home#index'
  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  # root "posts#index"
end
