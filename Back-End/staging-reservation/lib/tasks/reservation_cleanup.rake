# namespace :reservation_cleanup do 
# desc "Print reminder about eating more fruit."

# task :reservation => :environment do
  # puts "Eat more apples!"
  # def self.cleanup_old_papertrail_versions
  #   # retention_period = 30.minutes # Par exemple, conserver les versions pendant 30 jours
  #   # deletion_date = retention_period.ago
    # current_time = Time.current
  #   # puts "*************************************************"
  #   # puts "Hello world "
  #   # puts "*************************************************"
    # PaperTrail::version.when('created_at < ?', current_time - 1.hour).delete_all
  #   # PaperTrail::Version.where('created_at < ?', deletion_date).delete_all
  # end

  # PaperTrail::VERSION.where('created_at < ?', current_time - 1.hour).delete_all

  # PaperTrail::VERSION.where('created_at < ?', current_time - 1.hour).delete_all

  # current_time = Time.current - 1.hour
  # PaperTrail::version.where('created_at < ?', current_time).delete_all

  # PaperTrail::Version.where('created_at < ?', 1.day.ago).delete_all

# end
# end

require 'paper_trail'
# require 'reserver'
# include PaperTrail::Version

namespace :reservation_cleanup do
  desc "Clean up old PaperTrail versions"
  task :reservation => :environment do
    # delete from versions where created_at < '2010-06-01';
    # PaperTrail::Version.where_object(content: 'Hello', title: 'Article')
    puts current_time = Time.current
    # select from version where('created_at < ?', Time.current - 1.hour).delete_all

      Reserver.cleanup_expired_reservations
    # versions_to_delete = PaperTrail::Version.where('created_at < ?', current_time - 1.hour)
    # versions_to_delete.delete_all

    # users = Reserver.all
    # puts users
    # puts "Old PaperTrail versions deleted."


  end


end