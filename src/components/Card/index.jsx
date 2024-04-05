import { Link, useLocation } from 'react-router-dom';
import './styles.css';

const Card = () => {
  const { pathname } = useLocation();
  return (
    <Link to={`${pathname}/productId`} className="item-card">
      <div className="item-card_img">
        <img
          src="https://img.freepik.com/premium-wektory/slodki-chomik-w-stylu-pixel-art_475147-1281.jpg?w=360"
          alt=""
        />
      </div>
      <div className="item-card_title">
        <div className="item-card_brand-name">Назва бренду</div>
        <div className="item-card_brand-item">Назва товару</div>
      </div>
      <div className="item-card_details">₴ціна</div>
      <div className="addToWishlist" title="Додати в улюблені">
        <span className="icon-heart"></span>
      </div>
    </Link>
  );
};

export default Card;
