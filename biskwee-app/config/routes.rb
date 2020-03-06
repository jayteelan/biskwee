Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
	ActiveAdmin.routes(self)
	scope '/api' do
  resources :recipes
	resources :ingredients
	end
  # resources :units
  # resources :categories
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
