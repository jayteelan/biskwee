Rails.application.routes.draw do
	devise_for :users, controllers: { registrations: 'registrations' }
	  namespace :api do
    namespace :v1 do
      get 'post/index'
      post :auth, to: 'authentication#create'
			get  '/auth' => 'authentication#fetch'
			
			resources :recipes do
				resources :ingred_lines
			end
			resources :ingredients
			resources :units
		end
	end

		
	devise_for :admin_users, ActiveAdmin::Devise.config
	ActiveAdmin.routes(self)
	scope '/api' do
	resources :recipes do
		resources :ingred_lines
	end
	resources :ingredients
  resources :units
	resources :categories
	end
end
