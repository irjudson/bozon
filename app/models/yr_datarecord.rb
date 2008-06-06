class YRDatarecord < YogoRecord
  # new/updated datarecords must match the latest version of the datamodel that this datarecord represents
  # older datarecords will match the version of the datamodel that existed when they were created
  
  validates_format_of :type, :with => /datarecord/
  
  def validate
    
  end
  
end