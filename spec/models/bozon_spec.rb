require File.expand_path(File.dirname(__FILE__) + '/../spec_helper')

describe Bozon do
  before(:each) do
    @valid_attributes = {
      :data => "value for data"
    }
  end

  it "should create a new instance given valid attributes" do
    Bozon.create!(@valid_attributes)
  end
  
  it "should set a uuid on create" do
    bozon = Bozon.new(@valid_attributes)
    bozon.uuid.should_not be_nil
  end
  
  it "should set the cid on save" do
    bozon = Bozon.new(@valid_attributes)
    bozon.save
    bozon.cid.should_not be_nil
  end
  
  it "should ignore a user specified uuid" do
    b = Bozon.new(@valid_attributes)
    b.should_not respond_to(:uuid=)
  end
  
  it "should ignore a user specified cid" do
    b = Bozon.new(@valid_attributes)
    b.should_not respond_to(:cid=)
  end
  
  it "should ignore a user specified parent" do
    b = Bozon.new(@valid_attributes)
    b.should_not respond_to(:parent=)
  end

  it "should not be valid with blank data" do 
    @valid_attributes[:data] = nil
    b = Bozon.new(@valid_attributes)
    b.should_not be_valid
  end
  
  it "should respond to set_parent method" do
    b = Bozon.new(@valid_attributes)
    b.should respond_to(:set_parent)
  end
  
  it "should return true if set_parent succeeds" do
    old = Bozon.new(@valid_attributes)
    old.should be_valid
    old.save
    bozon = Bozon.new(@valid_attributes)
    bozon.should be_valid
    bozon.set_parent(old).should == true
  end
  
  it "should return false if set_parent fails" do
    old = Bozon.new(@valid_attributes)
    old.should be_valid
    old.save
    bozon = Bozon.new(@valid_attributes)
    bozon.should be_valid
    bozon.set_parent(nil).should == false
    old[:cid] = nil
    bozon.set_parent(old).should == false
    old[:uuid] = nil
    bozon.set_parent(old).should == false
  end
  
  it "should set the parent to the old bozon cid" do
    old = Bozon.new(@valid_attributes)
    old.should be_valid
    old.save
    bozon = Bozon.new(@valid_attributes)
    bozon.should be_valid
    bozon.set_parent(old)
    bozon.parent.should == old.cid
  end
end
