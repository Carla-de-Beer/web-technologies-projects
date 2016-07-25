# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

require 'date'

#puts 'Creating books...'

books = Book.create!([{isbn: '1118988248', title: 'Coding for Dummies', author: 'Barry Burt', publisher: 'Wiley Publishing, Inc.', published_date: Date.new(2007,01,01), date_checkout: Date.new(2015,11,14),
                      image_URL: 'Coding for Dummies.jpg', first_page_URL: 'Coding for Dummies - FP.jpg'},
                      {isbn: '1118084780', title: 'Ruby on Rails for Dummies', author: 'Nikhil Abraham', publisher: 'Wiley Publishing, Inc.', published_date: Date.new(2015,01,01), date_checkout: Date.new(2016,01,21),
                      image_URL: 'Ruby on Rails for Dummies.jpg', first_page_URL: 'Ruby on Rails for Dummies - FP.jpg'},
                      {isbn: '9780763780807', title: 'SAP ERP Financials and FICO Handbook', author: 'Padhi Padhi', publisher: 'Jones & Bartlett Learning', published_date: Date.new(2009,12,21), date_checkout: Date.new(2016,01,25),
                       image_URL: 'SAP ERP Financials and FICO Handbook.jpg', first_page_URL: 'SAP ERP Financials and FICO Handbook - FP.jpg'},
                      {isbn: '9780596516178', title: 'The Ruby Programming Language', author: 'David Flanagan, Yukihiro Matsumoto', publisher: 'Reilly Media, Inc.', published_date: Date.new(2008,01,25),
                       image_URL: 'The Ruby Programming Language.jpg', first_page_URL: 'The Ruby Programming Language - FP.jpg'},
                      {isbn: '9780470404737', title: 'Outlines and Highlights for Configuring Sap Erp Sales and Distribution', publisher: 'Academic Internet Pub Incorporated', author: 'Cram101 Textbook Reviews', published_date: Date.new(2010,06,03),
                       image_URL: 'Configuring SAP ERP Financials and Controlling.jpg', first_page_URL: 'Configuring SAP ERP Financials and Controlling - FP.jpg'},
                      {isbn: '9780511755279', title: 'Coding Theory', publisher: 'Cambridge University Press', author: 'San Ling, Chaoping Xing', published_date: Date.new(2004,02,12), date_checkout: Date.new(2015,10,17),
                       image_URL: 'Coding Theory.jpg', first_page_URL: 'Coding Theory - FP.jpg'},
                      {isbn: '9781430228899', title: 'Beginning Java EE 6 with GlassFish 3', publisher: 'Apress', author: 'Antonio Goncalves', published_date: Date.new(2010,9,24),
                       image_URL: 'Beginning Java EE 6 with GlassFish 3.jpg', first_page_URL: 'Beginning Java EE 6 with GlassFish 3 - FP.jpg'}])

#puts 'Creating users...'

user_defaults = {password: '12345678', password_confirmation: '12345678'}

users = User.create!([{first_name: 'Carla', last_name: 'DB', number: 123456789,
                      email: 'carla@labs.epiuse.com', password: '12345678', password_confirmation: '12345678', activated: true, locked: false, time_zone: 'Mars', locale: 'somewhere',
                      office_number: '123456789', mobile_number: '123456789', title: 'qwerty', job_title:'qwerty', account_number: 123456789, is_admin: true},
                     {first_name: 'Joe', last_name: 'Doe', number: 123456789,
                      email: 'u95151835@tuks.co.za', password: '12345678', password_confirmation: '12345678', activated: true, locked: false, time_zone: 'Jupiter', locale: 'somewhere',
                      office_number: '123456789', mobile_number: '123456789', title: 'qwerty', job_title:'qwerty', account_number: 123456789, is_admin: false}])

books[0].users << users[1]
books[1].users << users[0]
books[2].users << users[0]
books[5].users << users[0]

