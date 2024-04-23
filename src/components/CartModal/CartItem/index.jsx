const CartItem = () => {
  return (
    <div className="itemRow_item">
      <div className="itemRow_item-image">
        <a>
          <img
            src="https://cdn.connox.com/m/100106/569511/media/andtradition/AW2020-2021/andTradition-Flowerpot-Akku-Tischleuchte-VP9-grau-beige.jpg"
            alt="img"
          />
        </a>
      </div>
      <div className="itemRow_item-details">
        <div className="itemRow_upper-details">
          <div className="itemRow_upper-left">
            <a>Brand name - Product Name</a>
            <div>
              <select>
                <option value="1" selected>
                  1
                </option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
          </div>
          <div className="itemRow_upper-right">
            <span className="icon icon-delete-product">&nbsp;</span>
          </div>
        </div>
        <div className="itemRow_lower-details">
          <div className="itemRow_lower-left">
            <strong className="in-stock-green">В наявності</strong>
          </div>
          <div className="itemRow_lower-right">
            <strong className="order-price">
              <span className="details-price-tag">₴</span>150
            </strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
