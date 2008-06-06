class YRDatamodel < YogoRecord
  
  attr_accessor :raw_content
  
  validates_format_of :type, :with => /datamodel/
  
  # A datamodel is a list of datatypes that describe a template for a datarecord.
  # their content is *entirely* made up of datatypes
  
  def validate
    
  end
  
end