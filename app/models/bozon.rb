class Bozon < ActiveRecord::Base
  validates_presence_of :data
  before_save :set_content_id

  def initialize(*params)
    super(*params)
    set_uuid
  end
  
  def set_parent(p)
    return false if (p.nil? || p.cid.nil? || p.uuid.nil?)
    self.uuid = p.uuid
    self.parent = p.cid
    return true
  end
  
  private

    def uuid=(v)
      write_attribute(:uuid, v)
    end
    
    def cid=(c)
      write_attribute(:cid,c)
    end
    
    def parent=(p)
      write_attribute(:parent,p)
    end
    
    def set_uuid
      self.uuid = UUID.random_create.to_s
    end
    
    def set_content_id
      self.cid = Digest::SHA1.hexdigest(self.data)
    end
end
