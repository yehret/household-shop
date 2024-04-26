import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addQuantity, minusQuantity, removeItem } from '../../../redux/cartSlice';

const CartItem = ({ itemData }) => {
  const [quantity, setQuantity] = useState(itemData.quantityOrder);
  const dispatch = useDispatch();

  const handleRemoveFromCart = () => {
    dispatch(removeItem(itemData._id));
  };

  const handleDecrement = () => {
    dispatch(minusQuantity(itemData._id));
    setQuantity(quantity - 1);
  };

  const handleIncrement = () => {
    dispatch(addQuantity(itemData._id));
    setQuantity(quantity + 1);
  };

  return (
    <div className="itemRow_item">
      <div className="itemRow_item-image">
        <a>
          <img
            src={
              itemData.imageURL ||
              'https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/blurred-gray-background-brandon-bourdages.jpg'
            }
            alt={itemData.name}
          />
        </a>
      </div>
      <div className="itemRow_item-details">
        <div className="itemRow_upper-details">
          <div className="itemRow_upper-left">
            <a>
              {itemData.brandname} - {itemData.name}
            </a>
            <div className="quantity-block">
              <span onClick={handleDecrement} className="icon icon-minus-value">
                &nbsp;
              </span>
              <input
                type="number"
                value={quantity}
                name="Quantity"
                onChange={(e) => setQuantity(e.target.value)}
              />
              <span onClick={handleIncrement} className="icon icon-plus-value">
                &nbsp;
              </span>
            </div>
          </div>
          <div className="itemRow_upper-right">
            <span onClick={handleRemoveFromCart} className="icon icon-delete-product">
              &nbsp;
            </span>
          </div>
        </div>
        <div className="itemRow_lower-details">
          <div className="itemRow_lower-left">
            <strong className="in-stock-green">В наявності</strong>
          </div>
          <div className="itemRow_lower-right">
            <strong className="order-price">
              <span className="details-price-tag">₴</span>
              {itemData.price * quantity}
            </strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
