require File.dirname(__FILE__) + '/spec_helper'

describe Bozon do
  before(:each) do
    # Required data members
    # version: the version of this bozon record
    # type {:datatype => "Basic Data Definition", :datamodel => "Model Component", :datarecord => "Actual Piece of Data"}
    # content:  payload content for this *type*
    @json_dt_string = {   :version => 0,
                   :type => :datatype,
                   :stuff => {
                              :label => :string,
                              :class => 'String'
                             } 
                }.to_json
    @json_dt_integer = {   :version => 0,
                   :type => :datatype,
                   :stuff => {
                              :label => :integer,
                              :class => 'Integer'
                             } 
                }.to_json

    @json_dm = {:version => 0,
                :type => :datamodel,
                :stuff =>  [{:label => :first_name, :datatype => :string},
                            {:label => :last_name, :datatype => :string},
                           ]
                }.to_json
    #this one is used for tests below that just want a random bozon to test
    @json_dr = {:version => 0,
                :type => :datarecord,
                :stuff => {
                        :first_name => 'Yogo',
                        :last_name => 'DataPile'
                 }
               }.to_json
  end
  
  it "should be a valid bozon if it has a version, type and stuff" do
    @test_data = YogoRecord.new(@json_test)
    @json_test = @json_dr.to_hash
    @json_test[:version].is not_nil
    @json_test[:type].is not_nil
    @json_test[:stuff].is not_nil    
    @bozon = Bozon.new(:content => @json_test.to_s)
    @bozon.should be_valid
  end
  
  it "should be invalid if it doesn't have a version" do
    @json_test = @json_dr.to_hash
    @json_test[:version].is not_nil
    @json_test[:type].is not_nil
    @json_test[:stuff].is not_nil    
    @bozon = Bozon.new(:content => @json_test.to_s)
    @bozon.should be_valid
  end
  
  it "should be invalid if it doesn't have a type" do
    true
  end
  
  it "should be invalid if it doesn't have any stuff" do
    true
  end
end
  