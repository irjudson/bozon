require File.dirname(__FILE__) + '/../spec_helper'

describe YRDatatype do
  before(:each) do
    # Required data members
    # version
    # type {:datatype => "Basic Data Definition", :datamodel => "Model Component", :datarecord => "Actual Piece of Data"}
    # content
    @json_str = { :version => 0,
                  :type => :datatype,
                  :name => 'String',
                  :content => [
                    {:label => 'String'},
                    {:class => 'String'}
                  ] 
                }
    # not yet testing the other datatypes
    @json_int = { :version => 0,
                  :type => :datatype,
                  :name => 'Integer',
                  :content => [
                    {:label => 'Integer'},
                    {:class => 'Integer'}
                  ] 
                }
  end
  
  it "should be valid with valid data" do
    @yogo = YRDatatype.new(@json_str.to_json)
    @yogo.should be_valid
  end
  
  it "should validate like a YogoRecord " do
    @json_str.delete(:type)
    @yr = YogoRecord.new(@json_str.to_json)
    @yr.should_not be_valid
    @yogo = YRDatatype.new(@json_str.to_json)
    @yogo.should_not be_valid
  end

end
  