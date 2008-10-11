require File.expand_path(File.dirname(__FILE__) + '/../../spec_helper')

describe "/bozons/edit.html.erb" do
  include BozonsHelper
  
  before(:each) do
    assigns[:bozon] = @bozon = stub_model(Bozon,
      :new_record? => false,
      :data => "value for data"
    )
  end

  it "should render edit form" do
    render "/bozons/edit.html.erb"
    
    response.should have_tag("form[action=#{bozon_path(@bozon)}][method=post]") do
      with_tag('input#bozon_data[name=?]', "bozon[data]")
    end
  end
end


