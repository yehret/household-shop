const ProductInfo = () => {
  return (
    <section className="product-wrapper">
      <div>
        <div className="product-gallery">
          <img
            alt="productimg"
            src="https://www.lecolibry.com/wp-content/uploads/pictifly/14643/colibryv3-3132-e1683106727751-528x528-x50y50-100.jpg"
          />
        </div>
        <div className="product-details">
          <h1 className="product-title">Назва товару</h1>
          <div className="product-rating">
            <div className="rating-section">
              <div className="rating-stars">
                <div className="rating-star-icon">
                  <i className="icon-star"></i>
                </div>
                <div className="rating-star-icon">
                  <i className="icon-star"></i>
                </div>
                <div className="rating-star-icon">
                  <i className="icon-star"></i>
                </div>
                <div className="rating-star-icon">
                  <i className="icon-star"></i>
                </div>
                <div className="rating-star-icon">
                  <i className="icon-star"></i>
                </div>
              </div>
              <div className="reviews-count">n відгуків</div>
            </div>
          </div>
          <div className="product-price">
            <div className="price-value">
              <span>$Ціна товару</span>
            </div>
            <div className="availability-notice">
              <i className="icon icon-truck"></i>
              <span>
                <strong className="green">В наявності</strong>
              </span>
            </div>
          </div>
          <div className="product-cart">
            <div className="addToCartButton">
              <button className="addtocart">Додати у кошик</button>
            </div>
            <div className="addToWishlistButton">
              <div className="addtowithlist">
                <span className="icon icon-wishlist"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductInfo;
