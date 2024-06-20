import { Link } from 'react-router-dom';
import axios from '../../utils/axios';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';

const WishlistItem = ({ favourite, handleRemoveFromFavourites }) => {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addToCart(favourite));
  };
  return (
    <div className="wishlist-item__wrapper">
      <div className="wishlist-item__image">
        <Link>
          <img height={200} width={200} src={favourite.imageURL} alt="product title" />
        </Link>
      </div>
      <div className="wishlist-item__details">
        <Link className="wishlist-item__title">
          {favourite.brandname} - {favourite.name}
        </Link>
        <strong className="wishlist-item__pricetag">Ціна: ₴{favourite.price}</strong>
        <div className="wishlist-item__date"></div>
        <div className="wishlist-item__buttons-wrapper">
          <button onClick={handleAddToCart} className="btn-green">
            Додати у кошик
          </button>
          <div
            onClick={() => handleRemoveFromFavourites(favourite._id)}
            className="wishlist-item__remove">
            <span className="icon icon-remove"></span>
            <span className="wishlist-item__remove-title">Видалити</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishlistItem;
