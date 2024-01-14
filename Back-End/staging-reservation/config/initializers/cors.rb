Rails.application.config.middleware.insert_before 0, Rack::Cors do
    allow do
      # origins "https://run-it.apprentus.dev"
      # runner en prod
      # origins "https://rails.apprentus.dev/"

      # origins "http://localhost:4200"
      origins '*'
      # run en locale 
      resource '*',
      headers: :any, 
      methods: [:get, :post, :put, :patch, :delete, :options, :head]
    end
  end