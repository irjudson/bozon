require File.dirname(__FILE__) + '/../spec_helper'

describe YogoRecord do
  before(:each) do
    # Required data members
    # version: the version of this bozon record
    # type {:datatype => "Basic Data Definition", :datamodel => "Model Component", :datarecord => "Actual Piece of Data"}
    # content:  payload content for this *type*
    @json_hash = {:version => 0,
               :type => :datarecord,
               :content => {
                       :first_name => 'Yogo',
                       :last_name => 'DataPile'
                }
              }
  end
  
  it "should be a valid yogo_record if it has a version, type and content" do
    @json_hash[:version].should_not be_nil
    @json_hash[:type].should_not be_nil
    @json_hash[:content].should_not be_nil
    @yogo = YogoRecord.new(@json_hash.to_json)
    @yogo.should be_valid
  end

  it "should be an invalid yogo_record if it is missing a version" do
    @json_hash.delete(:version)
    @json_hash[:version].should be_nil
    @yogo = YogoRecord.new(@json_hash.to_json)
    @yogo.should_not be_valid
  end

  it "should be an invalid yogo_record if the version is non-numerical" do
    @json_hash[:version] = 'foo'
    @yogo = YogoRecord.new(@json_hash.to_json)
    @yogo.should_not be_valid
  end

  it "should be a valid yogo_record if the version is a numerical string" do
    @json_hash[:version] = '0'
    @yogo = YogoRecord.new(@json_hash.to_json)
    @yogo.should be_valid
  end

  it "should be an invalid yogo_record if it is missing a type" do
    @json_hash.delete(:type)
    @json_hash[:type].should be_nil
    @yogo = YogoRecord.new(@json_hash.to_json)
    @yogo.should_not be_valid
  end

  it "should be an invalid yogo_record if it is missing a content" do
    @json_hash.delete(:content)
    @json_hash[:content].should be_nil
    @yogo = YogoRecord.new(@json_hash.to_json)
    @yogo.should_not be_valid
  end
  
  it "should have content which is an array or hash" do
    @yogo = YogoRecord.new(@json_hash.to_json)
    [Array,Hash].should include(@yogo.content.class)
  end
  
  it "should not be valid if the content is not an array or hash" do
    @json_hash[:content] = 'This is not an array or hash.'
    @yogo = YogoRecord.new(@json_hash.to_json)
    @yogo.should_not be_valid
  end
  
  it "should respond to a to_json method which returns a json string" do
    @yogo = YogoRecord.new(@json_hash.to_json)
    @yogo.should respond_to('to_json')
    @yogo.should be_valid
    @yogo.to_json.should_not be_empty # this may be empty if the YR is invalid
  end

end
  