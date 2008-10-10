require File.expand_path(File.dirname(__FILE__) + '/../../spec_helper')

describe "/bozons/new.html.erb" do
  include BozonsHelper
  
  before(:each) do
    assigns[:bozon] = stub_model(Bozon,
      :new_record? => true,
      :data => "value for data",
      :cid => "value for cid",
      :uuid => "value for uuid",
      :parent => "value for parent"
    )
  end

  it "should render new form" do
    render "/bozons/new.html.erb"
    
    response.should have_tag("form[action=?][method=post]", bozons_path) do
      with_tag("input#bozon_data[name=?]", "bozon[data]")
      with_tag("input#bozon_cid[name=?]", "bozon[cid]")
      with_tag("input#bozon_uuid[name=?]", "bozon[uuid]")
      with_tag("input#bozon_parent[name=?]", "bozon[parent]")
    end
  end
end


