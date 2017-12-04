class Daily < ActiveRecord::Migration[5.1]
  def change
    add_column :dailies, :year, :integer, null: false
    add_column :dailies, :month, :integer, null: false
    add_column :dailies, :date, :integer, null: false
  end
end
