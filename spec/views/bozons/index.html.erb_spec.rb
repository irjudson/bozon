require File.expand_path(File.dirname(__FILE__) + '/../../spec_helper')

describe "/bozons/index.html.erb" do
  include BozonsHelper
  
  before(:each) do
    assigns[:bozons] = [
      stub_model(Bozon,
        :data => "value for data",
        :cid => "value for cid",
        :uuid => "value for uuid",
        :parent => "value for parent"
      ),
      stub_model(Bozon,
        :data => "value for data",
        :cid => "value for cid",
        :uuid => "value for uuid",
        :parent => "value for parent"
      )
    ]
  end

  it "should render list of bozons" do
    render "/bozons/index.html.erb"
    response.should have_tag("tr>td", "value for data", 2)
    response.should have_tag("tr>td", "value for cid", 2)
    response.should have_tag("tr>td", "value for uuid", 2)
    response.should have_tag("tr>td", "value for parent", 2)
  end
end

