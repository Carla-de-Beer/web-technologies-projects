class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  # This makes the current_user method available in views as well.
  helper_method :current_user

  def current_user
    User.find_by_id(1) # Or use User.first
  end


end
