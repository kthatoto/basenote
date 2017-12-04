Rails.application.routes.draw do

  get 'check', to: 'top#check'
  resources :dailies
end
