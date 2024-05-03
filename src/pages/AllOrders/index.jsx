import './styles.css';

const AllOrders = () => {
  return (
    <section>
      <div>
        <div className="account-section-orders">
          <h2 className="account-section__header">Замовлення</h2>
          <div className="account-section__item">
            <div className="account-section__order-data">
              <div className="account-section__order-number">
                <span>Номер замовлення: 1</span>
              </div>
              <div className="account-section__order-date">
                <span>Дата оформлення: 00.00.000 00:00</span>
              </div>
              <div className="account-section__order-status">
                <div className="order-status">
                  <div className="order-status-name yellow-status">Очікує підтвердження</div>
                </div>
              </div>
            </div>
            <div className="account-section__order-products">
              <div className="account-section__order-product">
                <div className="order-product-img">
                  <img
                    src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/blurred-gray-background-brandon-bourdages.jpg"
                    alt=""
                  />
                </div>
                <div className="order-product-name">Product Name</div>
                <div className="order-product-price-details">
                  <span className="order-product-quantity">5</span>
                  <div className="separator">x</div>
                  <div className="order-product-price">
                    15<span className="details-price-tag">₴</span>
                  </div>
                </div>
              </div>
              <div className="account-section__order-product">
                <div className="order-product-img">
                  <img
                    src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/blurred-gray-background-brandon-bourdages.jpg"
                    alt=""
                  />
                </div>
                <div className="order-product-name">Product Name</div>
                <div className="order-product-price-details">
                  <span className="order-product-quantity">5</span>
                  <div className="separator">x</div>
                  <div className="order-product-price">
                    15<span className="details-price-tag">₴</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="account-section__order-actions">
              <div className="order-cancel-button order-action-button">
                <span>Скасувати замовлення</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllOrders;
