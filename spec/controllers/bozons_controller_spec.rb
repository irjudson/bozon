require File.expand_path(File.dirname(__FILE__) + '/../spec_helper')

describe BozonsController do

  def mock_bozon(stubs={})
    @mock_bozon ||= mock_model(Bozon, stubs.merge!({:set_parent => true}))
  end
  
  def old_bozon(stubs={})
    @old_bozon ||= mock_model(Bozon, stubs.merge!({:set_parent => true}))
  end
  
  def new_bozon(stubs={})
    @old_bozon ||= mock_model(Bozon, stubs.merge!({:set_parent => true}))
  end
  
  describe "responding to GET index" do

    it "should expose all bozons as @bozons" do
      Bozon.should_receive(:find).with(:all).and_return([mock_bozon])
      get :index
      assigns[:bozons].should == [mock_bozon]
    end

    describe "with mime type of xml" do
  
      it "should render all bozons as xml" do
        request.env["HTTP_ACCEPT"] = "application/xml"
        Bozon.should_receive(:find).with(:all).and_return(bozons = mock("Array of Bozons"))
        bozons.should_receive(:to_xml).and_return("generated XML")
        get :index
        response.body.should == "generated XML"
      end
    
    end

  end

  describe "responding to GET show" do

    it "should expose the requested bozon as @bozon" do
      Bozon.should_receive(:find).with("37").and_return(mock_bozon)
      get :show, :id => "37"
      assigns[:bozon].should equal(mock_bozon)
    end
    
    describe "with mime type of xml" do

      it "should render the requested bozon as xml" do
        request.env["HTTP_ACCEPT"] = "application/xml"
        Bozon.should_receive(:find).with("37").and_return(mock_bozon)
        mock_bozon.should_receive(:to_xml).and_return("generated XML")
        get :show, :id => "37"
        response.body.should == "generated XML"
      end

    end
    
  end

  describe "responding to GET new" do
  
    it "should expose a new bozon as @bozon" do
      Bozon.should_receive(:new).and_return(mock_bozon)
      get :new
      assigns[:bozon].should equal(mock_bozon)
    end

  end

  describe "responding to GET edit" do
  
    it "should expose the requested bozon as @bozon" do
      Bozon.should_receive(:find).with("37").and_return(mock_bozon)
      get :edit, :id => "37"
      assigns[:bozon].should equal(mock_bozon)
    end

  end

  describe "responding to POST create" do

    describe "with valid params" do
      
      it "should expose a newly created bozon as @bozon" do
        Bozon.should_receive(:new).with({'these' => 'params'}).and_return(mock_bozon(:save => true))
        post :create, :bozon => {:these => 'params'}
        assigns(:bozon).should equal(mock_bozon)
      end

      it "should redirect to the created bozon" do
        Bozon.stub!(:new).and_return(mock_bozon(:save => true))
        post :create, :bozon => {}
        response.should redirect_to(bozon_url(mock_bozon))
      end
      
    end
    
    describe "with invalid params" do

      it "should expose a newly created but unsaved bozon as @bozon" do
        Bozon.stub!(:new).with({'these' => 'params'}).and_return(mock_bozon(:save => false))
        post :create, :bozon => {:these => 'params'}
        assigns(:bozon).should equal(mock_bozon)
      end

      it "should re-render the 'new' template" do
        Bozon.stub!(:new).and_return(mock_bozon(:save => false))
        post :create, :bozon => {}
        response.should render_template('new')
      end
      
    end
    
  end

  describe "responding to PUT udpate" do

    describe "with valid params" do

      it "should update a copy of the requested bozon" do
        Bozon.should_receive(:find).with("37").and_return(old_bozon)
        Bozon.should_receive(:new).with({'these' => 'params'}).and_return(new_bozon(:save => true))
        new_bozon.should_receive(:set_parent).with(old_bozon).and_return(true)
        new_bozon.should_receive(:save)
        put :update, :id => "37", :bozon => {:these => 'params'}
        assigns(:bozon).should equal(new_bozon)
      end

      it "should expose a copy of the requested bozon as @bozon" do
        Bozon.stub!(:find).and_return(old_bozon())
        Bozon.stub!(:new).and_return(new_bozon())
        new_bozon.stub!(:set_parent)
        new_bozon.stub!(:save).and_return(true)
        put :update, :id => "1"
        assigns(:bozon).should equal(new_bozon)
      end

      it "should redirect to the bozon" do
        Bozon.stub!(:find).and_return(old_bozon())
        Bozon.stub!(:new).and_return(new_bozon())
        new_bozon.stub!(:set_parent)        
        new_bozon.stub!(:save).and_return(true)
        put :update, :id => "1"
        response.should redirect_to(bozon_url(new_bozon))
      end

    end
    
    describe "with invalid params" do

      it "should update the requested bozon" do
        Bozon.should_receive(:find).with("37").and_return(old_bozon)
        Bozon.should_receive(:new).with({'these' => 'params'}).and_return(mock_bozon(:save => false))
        mock_bozon.should_receive(:set_parent).with(old_bozon).and_return(true)
        put :update, :id => "37", :bozon => {:these => 'params'}
      end

      it "should expose a copy of the bozon as @bozon" do
        Bozon.stub!(:find).and_return(old_bozon())
        Bozon.stub!(:new).and_return(new_bozon())
        new_bozon.stub!(:save).and_return(false)
        new_bozon.stub!(:set_parent)
        put :update, :id => "1"
        assigns(:bozon).should equal(new_bozon)
      end

      it "should re-render the 'edit' template" do
        Bozon.stub!(:find).and_return(old_bozon())
        Bozon.stub!(:new).and_return(new_bozon())
        new_bozon.stub!(:save).and_return(false)
        new_bozon.stub!(:set_parent)
        put :update, :id => "1"
        response.should render_template('edit')
      end

    end

  end

  describe "responding to DELETE destroy" do

    it "should destroy the requested bozon" do
      Bozon.should_receive(:find).with("37").and_return(mock_bozon)
      mock_bozon.should_receive(:destroy)
      delete :destroy, :id => "37"
    end
  
    it "should redirect to the bozons list" do
      Bozon.stub!(:find).and_return(mock_bozon(:destroy => true))
      delete :destroy, :id => "1"
      response.should redirect_to(bozons_url)
    end

  end

end
