require File.dirname(__FILE__) + '/../spec_helper'

describe Bozon do
  before(:each) do
    @json_str = { :version => 0,
                  :type => :datatype,
                  :name => 'String',
                  :content => [
                    {:label => 'String'},
                    {:class => 'String'}
                  ] 
                }
    @yr_dt_str = YRDatatype.new(@json_str.to_json)
                
    @json_int = { :version => 0,
                  :type => :datatype,
                  :name => 'Integer',
                  :content => [
                    {:label => 'Integer'},
                    {:class => 'Integer'}
                  ] 
                }
    @yr_dt_int = YRDatatype.new(@json_int.to_json)
  
    @json_dm = { :version => 0,
                 :type => :datamodel,
                 :name => 'Person',
                 :content =>  [
                   {:label => 'first_name', :datatype => 'String'},
                   {:label => 'last_name', :datatype => 'String'},
                   {:label => 'num_items', :datatype => 'Integer'},
                 ]
                }
    @yr_dm = YRDatamodel.new(@json_dm.to_json)
                
    @json_dr = { :version => 0,
                 :type => :datarecord,
                 :name => 'Person',
                 :content => [
                   {:first_name => 'Yogo'},
                   {:last_name => 'Datastore'},
                   {:num_items => 3}
                 ]
               }
    @yr_dr = YRDatarecord.new(@json_str.to_json)
        
  end
  
  it "should be valid if the data to insert is valid" do
    @bozon = Bozon.new(:content => @yr_dt_str)
    @yr_dt_str.should be_valid
    @bozon.should be_valid
  end
  
end
  