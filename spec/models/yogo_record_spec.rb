require File.dirname(__FILE__) + '/../spec_helper'

describe YogoRecord do
  before(:each) do
    # Required data members
    # version
    # type {:datatype => "Basic Data Definition", :datamodel => "Model Component", :datarecord => "Actual Piece of Data"}
    # stuff We need to define what "stuff" means...I think it means payload content for this *type*
    @json_dt_string = {   :version => 0,
                   :type => :datatype,
                   :content => {
                              :label => :string,
                              :class => 'String'
                             } 
                }.to_json
    @json_dt_integer = {   :version => 0,
                   :type => :datatype,
                   :content => {
                              :label => :integer,
                              :class => 'Integer'
                             } 
                }.to_json

    @json_dm = {:version => 0,
                :type => :datamodel,
                :content =>  [{:label => :first_name, :datatype => :string},
                            {:label => :last_name, :datatype => :string},
                           ]
                }.to_json
    #this one is used for tests below that just want a random bozon to test
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

end
  