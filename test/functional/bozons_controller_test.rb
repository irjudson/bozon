require 'test_helper'

class BozonsControllerTest < ActionController::TestCase
  def test_should_get_index
    get :index
    assert_response :success
    assert_not_nil assigns(:bozons)
  end

  def test_should_get_new
    get :new
    assert_response :success
  end

  def test_should_create_bozon
    assert_difference('Bozon.count') do
      post :create, :bozon => { }
    end

    assert_redirected_to bozon_path(assigns(:bozon))
  end

  def test_should_show_bozon
    get :show, :id => bozons(:one).id
    assert_response :success
  end

  def test_should_get_edit
    get :edit, :id => bozons(:one).id
    assert_response :success
  end

  def test_should_update_bozon
    put :update, :id => bozons(:one).id, :bozon => { }
    assert_redirected_to bozon_path(assigns(:bozon))
  end

  def test_should_destroy_bozon
    assert_difference('Bozon.count', -1) do
      delete :destroy, :id => bozons(:one).id
    end

    assert_redirected_to bozons_path
  end
end
