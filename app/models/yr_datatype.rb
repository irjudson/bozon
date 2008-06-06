class YRDatatype < YogoRecord
  
  validates_format_of :type, :with => /datatype/
  validates_presence_of :datatype_label 
  validates_presence_of :datatype_class
  
  def datatype_label()
    @content.find { |c| !c['label'].nil? }
  end
  
  def datatype_class()
    @content.find { |c| !c['class'].nil? } 
  end
  
  
end