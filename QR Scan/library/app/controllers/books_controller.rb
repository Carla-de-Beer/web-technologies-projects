class BooksController < ApplicationController
  before_action :set_book, only: [:show, :edit, :update, :destroy]
  helper_method :sort_column, :sort_direction
  before_filter :check_for_cancel, :only => [:create, :update]

  def check_for_cancel
    if params[:commit] == 'Clear Form'
      redirect_to my_page_path
    end
  end

  # GET /books
  def index
    @books = Book.all
    @books = Book.order(sort_column + ' ' + sort_direction)
  end

  # GET /books/1
  def show
  end

  # GET /books/1
  def check_out
    @books = Book.all
    #render 'cart/checkout'
  end

  # GET /books
  def scan_check
    render 'books/scan_check'
  end

  # GET /books
  def confirm
    render 'books/confirmation'
  end

  # GET /books/1
  def show_first_page
    @book = Book.find(params[:id])
    render 'books/view_first_page'
  end

  # ISBN Lookup
  def isbn_lookup

    isbn = params[:isbn] || '9781451648546'
    url ='https://www.googleapis.com/books/v1/volumes?q=' + isbn + ':'
    uri = URI(url)

    response = ''
    Net::HTTP.start(uri.host, uri.port,
                    :use_ssl => uri.scheme == 'https') do |http|
      request = Net::HTTP::Get.new uri
      response = http.request request # Net::HTTPResponse object
    end

    book = JSON.parse(response.body)
    book_item = book['items'].first

    #puts '****************** ' + book['items'].first['volumeInfo']['title'].inspect

    @title =         book_item['volumeInfo']['title']
    @author =          book_item['volumeInfo']['authors'].join(', ')
    @publisher =     book_item['volumeInfo']['publisher'].to_s
    @published_date = book_item['volumeInfo']['publishedDate']

    # link_sanitizer = Rails::Html::LinkSanitizer.new
    # san = CGI.unescapeHTML(@publisher)

    # puts '****************** ' + @publisher.inspect
    # puts '****************** ' + @publisher.to_s
    # puts " ****************** #{@publisher} "

    respond_to do |format|
        format.js { render 'books/isbn_lookup' }
      end

  end

  # GET /books/new
  def new
    @book = Book.new
  end

  # GET /books/1/edit
  def edit
  end

  # POST /books
  def create
    @book = Book.new(book_params)

    if @book.save
      redirect_to @book, notice: 'Book was successfully created.'
    else
      render :new
    end
  end

  # PATCH/PUT /books/1
  def update
    if @book.update(book_params)
      redirect_to @book, notice: 'Book was successfully updated.'
    else
      render :edit
    end
  end

  # DELETE /books/1
  def destroy
    @book.destroy
    redirect_to books_url, notice: 'Book was p
 destroyed.'
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_book
      @book = Book.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def book_params
      params.require(:book).permit(:id, :isbn, :title, :author, :publisher, :published_date, :date_checkout, :image_URL, :first_page_URL)
    end

  private
  def sort_column
    Book.column_names.include?(params[:sort]) ? params[:sort] : 'title'
  end

  def sort_direction
    %w[asc desc].include?(params[:direction]) ? params[:direction] : 'asc'
  end
end
