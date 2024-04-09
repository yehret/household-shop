import { Link } from 'react-router-dom';

const WishlistItem = () => {
  return (
    <div className="wishlist-item__wrapper">
      <div className="wishlist-item__image">
        <Link>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFOwoZC8odFjjm05aX6sQ4WWOst-j_WKS-XTpz701VwA&s"
            alt="product title"
          />
        </Link>
      </div>
      <div className="wishlist-item__details">
        <Link className="wishlist-item__title">Назва бренду - Назва товару</Link>
        <strong className="wishlist-item__pricetag">$Ціна товару</strong>
        <div className="wishlist-item__date">Додано: дата</div>
        <div className="wishlist-item__buttons-wrapper">
          <button className="addtocart">Додати у кошик</button>
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
