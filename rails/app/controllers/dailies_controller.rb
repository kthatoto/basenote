class DailiesController < ApplicationController

  def index
    dailies = Daily.order({year: :desc}, {month: :desc}, {date: :desc})
    render json: {
      dailies: dailies,
    }
  end
end
