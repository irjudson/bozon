require File.expand_path(File.dirname(__FILE__) + '/../spec_helper')

describe BozonsController do
  describe "route generation" do
    it "should map #index" do
      route_for(:controller => "bozons", :action => "index").should == "/bozons"
    end
  
    it "should map #new" do
      route_for(:controller => "bozons", :action => "new").should == "/bozons/new"
    end
  
    it "should map #show" do
      route_for(:controller => "bozons", :action => "show", :id => 1).should == "/bozons/1"
    end
  
    it "should map #edit" do
      route_for(:controller => "bozons", :action => "edit", :id => 1).should == "/bozons/1/edit"
    end
  
    it "should map #update" do
      route_for(:controller => "bozons", :action => "update", :id => 1).should == "/bozons/1"
    end
  
    it "should map #destroy" do
      route_for(:controller => "bozons", :action => "destroy", :id => 1).should == "/bozons/1"
    end
  end

  describe "route recognition" do
    it "should generate params for #index" do
      params_from(:get, "/bozons").should == {:controller => "bozons", :action => "index"}
    end
  
    it "should generate params for #new" do
      params_from(:get, "/bozons/new").should == {:controller => "bozons", :action => "new"}
    end
  
    it "should generate params for #create" do
      params_from(:post, "/bozons").should == {:controller => "bozons", :action => "create"}
    end
  
    it "should generate params for #show" do
      params_from(:get, "/bozons/1").should == {:controller => "bozons", :action => "show", :id => "1"}
    end
  
    it "should generate params for #edit" do
      params_from(:get, "/bozons/1/edit").should == {:controller => "bozons", :action => "edit", :id => "1"}
    end
  
    it "should generate params for #update" do
      params_from(:put, "/bozons/1").should == {:controller => "bozons", :action => "update", :id => "1"}
    end
  
    it "should generate params for #destroy" do
      params_from(:delete, "/bozons/1").should == {:controller => "bozons", :action => "destroy", :id => "1"}
    end
  end
end
