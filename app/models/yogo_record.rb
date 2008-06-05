require 'json'
class YogoRecord
  attr_accessor :version, :type, :content
  
  include Validateable

  def initialize(json = '')
        @version = JSON[json]['version']
        @type = JSON[json]['type']
        @content = JSON[json]['content']
  end
  
  validates_presence_of :version
  validates_presence_of :type
  validates_presence_of :content

  validates_numericality_of :version
  
end