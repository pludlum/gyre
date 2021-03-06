Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resource :session, only: %i[create destroy]
    resources :users, only: %i[create]
    resources :poets, only: %i[show index] do
      resources :poems, only: %i[index] do
        resources :annotations, only: %i[index]

      end
    end
    resources :poems, only: %i[show create]
    resources :annotations, only: %i[show create update destroy] do
      resources :comments, only: %i[index]
    end

    resources :comments, only: %i[create destroy show]
    resources :votes, only: %i[create destroy]
  end
  get 'api/poems/search/:query', defaults: { format: :json }, to: 'api/poems#search'
  get 'api/top_poems', defaults: { format: :json }, to: 'api/poems#top_index'

end
