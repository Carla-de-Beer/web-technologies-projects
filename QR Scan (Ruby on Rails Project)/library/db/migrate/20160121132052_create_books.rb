require 'date'

class CreateBooks < ActiveRecord::Migration

  def change
    create_table :books do |t|
      t.string :isbn, null: false
      t.string :qr_code
      t.string :title, null: false
      t.string :author
      t.string :publisher
      t.date :published_date
      t.date :date_checkout
      t.string :image_URL
      t.string :first_page_URL
      t.timestamps null: false
    end
  end
end
