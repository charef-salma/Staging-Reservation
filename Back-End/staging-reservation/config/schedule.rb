# Use this file to easily define all of your cron jobs.
#
# It's helpful, but not entirely necessary to understand cron before proceeding.
# http://en.wikipedia.org/wiki/Cron

# Example:
#
# set :output, "/path/to/my/cron_log.log"
#
# every 2.hours do
#   command "/usr/bin/some_great_command"
#   runner "MyModel.some_method"
#   rake "some:great:rake:task"
# end
#
# every 4.days do
#   runner "AnotherModel.prune_old_records"
# end

# Learn more: http://github.com/javan/whenever

# every 1.day, at: '8:00 am' do
#     # runner 'Reserver.cleanup_expired_reservations'
#     runner 'ReservationCleanup.cleanup_old_papertrail_versions'



#   end




# BUNDLE_PATH = "/home/salma/.asdf/shims/bundle"

# # Chargez le bundle et l'environnement Rails
# ENV["BUNDLE_GEMFILE"] ||= File.expand_path("../../Gemfile", __FILE__)
# require 'bundler/setup'
# load Gem.bin_path('rails', 'rails')


 env :PATH, ENV['PATH']

 require 'dotenv/load'




 require File.expand_path(File.dirname(__FILE__) + '/environment')


#  set :output, "log/cron.log"
# env :BUNDLE_GEMFILE, ENV['BUNDLE_GEMFILE']

# set :output, Rails.root.join('log', 'cron.log')
  set :environment, :development
  # set :environment, :production 

  # set :environment, ENV['RAILS_ENV']

#  env :environment,ENV["RAILS_ENV"]



# set :output, { standard: "#{Whenever.path}/log/cron.log"}
set :output, { standard: "#{Whenever.path}/log/cron.log",
error: "#{Whenever.path}/log/cron.log" }

  every 1.day, at: '8:00 am'  do
  #  every 1.hour do
   #every 1.minute do 
    #  Rails.logger.info("Running cleanup_old_papertrail_versions task...")

    #  runner 'Reserver.cleanup_expired_reservations'
        # runner 'ReservationCleanup.cleanup_old_papertrail_versions'
         runner "Reserver.cleanup_old_papertrail_versions"
        
    #  command "echo '*********** Hello World **************'"
        #  rake "reservation_cleanup:reservation"
  end

  
