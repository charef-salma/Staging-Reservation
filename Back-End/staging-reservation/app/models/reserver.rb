class Reserver < ApplicationRecord
    belongs_to :serveur

    has_paper_trail

    # scope :not_modified, -> { joins(:versions).where(versions: { event: 'destroy' }) }
  


    validates :nom, presence: true
    validates :serveur_name, presence: true
    validates :specialite, presence: true
    validates :periode, presence: true
    validates :status, presence: true
    validates :reserved_for,  length: { maximum: 20 }

    #  validates :serveur_id, presence: true
    
    enum status: { booked: 1, free: 2 }

    #  def self.cleanup_expired_reservations
    #      current_time = DateTime.now
    #      Reserver.where('created_at < ?', current_time - 1.hour).destroy_all
    #    end


    def self.cleanup_old_papertrail_versions
        # retention_period = 30.minutes # Par exemple, conserver les versions pendant 30 jours
        # deletion_date = retention_period.ago
         puts current_time = Time.current
        #  puts "*************************************************"
        #  puts "Hello world "
        #  puts "*************************************************"
        #  PaperTrail::Version.where('created_at < ?', current_time - .hour).delete_all
        # PaperTrail::Version.where('created_at < ?', deletion_date).delete_all
        old_versions_count = PaperTrail::Version.where('created_at > ?', DateTime.now - 23.hours).count
        oldversions=PaperTrail::Version.where('created_at > ?', DateTime.now - 23.hours)
        puts "old versions: #{oldversions}"
        puts "Number of old versions before cleanup: #{old_versions_count}"
  
        PaperTrail::Version.where('created_at > ?', DateTime.now - 23.hours).delete_all
  
        new_versions_count = PaperTrail::Version.where('created_at > ?', DateTime.now - 23.hours).count
        puts "Number of old versions after cleanup: #{new_versions_count}"







      end
end
