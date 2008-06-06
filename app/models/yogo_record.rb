require 'json'
class YogoRecord
  attr_accessor :version, :type, :content, :name
  
  include Validateable
  validates_presence_of :version
  validates_presence_of :type
  validates_presence_of :content
  validates_format_of :type, :with => /(datatype)|(datamodel)|(datarecord)/
  validates_numericality_of :version

  def validate
    unless [Array,Hash].include?(content.class)
      errors.add_to_base('The :content must be a Hash or Array')
    end
  end
  
  def initialize(json = '')
    unless json.empty?
        @version = JSON[json]['version']
        @type = JSON[json]['type']
        @content = JSON[json]['content']
        @name = JSON[json]['name']
    else
      @version, @type, @name, @content = {},{},{},[{}]
    end
  end
  

  def to_json
    { :version => @version,
      :type => @type,
      :name => @name,
      :content => @content
      }.to_json
  end

end