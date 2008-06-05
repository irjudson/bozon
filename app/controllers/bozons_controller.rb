class BozonsController < ApplicationController
  # GET /bozons
  # GET /bozons.xml
  def index
    @bozons = Bozon.find(:all)

    respond_to do |format|
      format.html # index.html.erb
      format.xml  { render :xml => @bozons }
      format.json { render :json => @bozons }
    end
  end

  # GET /bozons/1
  # GET /bozons/1.xml
  def show
    @bozon = Bozon.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.xml  { render :xml => @bozon }
      format.json { render :json => @bozon }
    end
  end

  # GET /bozons/new
  # GET /bozons/new.xml
  def new
    @bozon = Bozon.new

    respond_to do |format|
      format.html # new.html.erb
      format.xml  { render :xml => @bozon }
      format.json { render :json => @bozon }
    end
  end

  # GET /bozons/1/edit
  def edit
    @bozon = Bozon.find(params[:id])
  end

  # POST /bozons
  # POST /bozons.xml
  def create
    @bozon = Bozon.new(params[:bozon])

    respond_to do |format|
      if @bozon.save
        flash[:notice] = 'Bozon was successfully created.'
        format.html { redirect_to(@bozon) }
        format.xml  { render :xml => @bozon, :status => :created, :location => @bozon }
        format.json { render :json => @bozon, :status => :created, :location => @bozon }
      else
        format.html { render :action => "new" }
        format.xml  { render :xml => @bozon.errors, :status => :unprocessable_entity }
        format.json  { render :json => @bozon.errors, :status => :unprocessable_entity }
      end
    end
  end

  # PUT /bozons/1
  # PUT /bozons/1.xml
  def update
    @bozon = Bozon.find(params[:id])

    respond_to do |format|
      if @bozon.update_attributes(params[:bozon])
        flash[:notice] = 'Bozon was successfully updated.'
        format.html { redirect_to(@bozon) }
        format.xml  { head :ok }
      else
        format.html { render :action => "edit" }
        format.xml  { render :xml => @bozon.errors, :status => :unprocessable_entity }
      end
    end
  end

  # DELETE /bozons/1
  # DELETE /bozons/1.xml
  def destroy
    @bozon = Bozon.find(params[:id])
    @bozon.destroy

    respond_to do |format|
      format.html { redirect_to(bozons_url) }
      format.xml  { head :ok }
    end
  end
end
