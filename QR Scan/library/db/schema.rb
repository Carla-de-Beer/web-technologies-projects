# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160121133952) do

  create_table "books", force: :cascade do |t|
    t.string   "isbn",           null: false
    t.string   "qr_code"
    t.string   "title",          null: false
    t.string   "author"
    t.string   "publisher"
    t.date     "published_date"
    t.date     "date_checkout"
    t.string   "image_URL"
    t.string   "first_page_URL"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
  end

  create_table "books_users", id: false, force: :cascade do |t|
    t.integer  "book_id"
    t.integer  "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "books_users", ["book_id"], name: "index_books_users_on_book_id"
  add_index "books_users", ["user_id"], name: "index_books_users_on_user_id"

  create_table "users", force: :cascade do |t|
    t.string   "first_name",                      null: false
    t.string   "last_name",                       null: false
    t.integer  "number"
    t.boolean  "activated"
    t.boolean  "locked"
    t.string   "time_zone"
    t.string   "locale"
    t.string   "office_number"
    t.string   "mobile_number"
    t.string   "title"
    t.string   "job_title"
    t.integer  "account_number"
    t.boolean  "is_admin"
    t.datetime "created_at",                      null: false
    t.datetime "updated_at",                      null: false
    t.string   "email",              default: "", null: false
    t.string   "encrypted_password", default: "", null: false
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true

end
