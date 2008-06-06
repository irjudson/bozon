require File.dirname(__FILE__) + '/../spec_helper'

describe YRDatamodel do
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
                
    @json_int = { :version => 0,
                  :type => :datatype,
                  :name => 'Integer',
                  :content => [
                    {:label => 'Integer'},
                    {:class => 'Integer'}
                  ] 
                }
  
    @json_dm = { :version => 0,
                 :type => :datamodel,
                 :name => 'Person',
                 :content =>  [
                   {:label => 'first_name', :datatype => 'String'},
                   {:label => 'last_name', :datatype => 'String'},
                   {:label => 'num_items', :datatype => 'Integer'},
                 ]
                }
  end
  
  it "should be valid with valid data" do
    @yogo = YRDatamodel.new(@json_dm.to_json)
    @yogo.should be_valid
  end
  
  it "should validate like a YogoRecord " do
    @json_dm.delete(:type)
    @yr = YogoRecord.new(@json_dm.to_json)
    @yr.should_not be_valid
    @yogo = YRDatamodel.new(@json_dm.to_json)
    @yogo.should_not be_valid
  end

end
  