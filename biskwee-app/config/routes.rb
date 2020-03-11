Rails.application.routes.draw do
	devise_for :users, controllers: { registrations: 'registrations' }
	# devise_for :users
	  namespace :api do
    namespace :v1 do
      get 'post/index'
      post :auth, to: 'authentication#create'
			get  '/auth' => 'authentication#fetch'
			
			resources :recipes
			resources :ingredients
			resources :units
			resources :categories
		end

		namespace :v2 do
      # Things yet to come
		end
	end
		
	devise_for :admin_users, ActiveAdmin::Devise.config
	ActiveAdmin.routes(self)
	scope '/api' do
  resources :recipes
	resources :ingredients
  resources :units
	resources :categories
	end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
