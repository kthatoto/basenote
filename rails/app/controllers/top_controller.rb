class TopController < ApplicationController

  def check
    render json: { message: 'connected' }
  end
end
