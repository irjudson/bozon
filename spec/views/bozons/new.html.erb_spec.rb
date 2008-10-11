require File.expand_path(File.dirname(__FILE__) + '/../../spec_helper')

describe "/bozons/new.html.erb" do
  include BozonsHelper
  
  before(:each) do
    assigns[:bozon] = stub_model(Bozon,
      :new_record? => true,
      :data => "value for data"
    )
  end

  it "should render new form" do
    render "/bozons/new.html.erb"
    
    response.should have_tag("form[action=?][method=post]", bozons_path) do
      with_tag("input#bozon_data[name=?]", "bozon[data]")
    end
  end
end


