require File.expand_path(File.dirname(__FILE__) + '/../../spec_helper')

describe "/bozons/show.html.erb" do
  include BozonsHelper
  
  before(:each) do
    assigns[:bozon] = @bozon = stub_model(Bozon,
      :data => "value for data",
      :cid => "value for cid",
      :uuid => "value for uuid",
      :parent => "value for parent"
    )
  end

  it "should render attributes in <p>" do
    render "/bozons/show.html.erb"
    response.should have_text(/value\ for\ data/)
    response.should have_text(/value\ for\ cid/)
    response.should have_text(/value\ for\ uuid/)
    response.should have_text(/value\ for\ parent/)
  end
end

