class Product < ApplicationRecord
  validates :name, :description, :price, :category, presence: true
  validates :rating, inclusion: { in: 1..5 }, presence: true


  has_one_attached :photo

  has_many :reviews, 
    dependent: :destroy

  has_many :order_items, 
    dependent: :destroy
  
  has_many :cart_items,
    foreign_key: :product_id,
    class_name: :CartItem,
    dependent: :destroy


  def self.search_names(query, category)
    lowercase_query = query.downcase

    if category == 'All'
      where("lower(name) LIKE ?", "%#{sanitize_sql_like(lowercase_query)}%")
    else
      where("lower(name) LIKE ? AND lower(category) = ?", "%#{sanitize_sql_like(lowercase_query)}%", category.downcase)
    end
  end


  def self.paginated(page, per_page, category)
    page_num = page.to_i.positive? ? page.to_i : 1
    offset = (page_num - 1) * per_page
    if category == 'all'
      Product.order(id: :desc).limit(per_page).offset(offset)
    else
      Product.where(category: category).order(id: :desc).limit(per_page).offset(offset)
    end
  end

end
