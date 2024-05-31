import { Link } from 'react-router-dom';

const WishlistItem = ({ favourite }) => {
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
          <button className="btn-green">Додати у кошик</button>
          <div className="wishlist-item__remove">
            <span className="icon icon-remove"></span>
            <span className="wishlist-item__remove-title">Видалити</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishlistItem;
