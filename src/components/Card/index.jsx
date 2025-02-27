import { Link, useLocation } from 'react-router-dom';
import './styles.css';

const Card = ({ card }) => {
  const { pathname } = useLocation();

  //   `${pathname}/${card._id}`
  return card.quantity ? (
    <Link
      to={card.quantity && `${pathname}/${card._id}`}
      className={`item-card ${!card.quantity && 'card-disabled'}`}>
      <div className="item-card_img">
        <img src={card?.imageURL} alt={card.name} />
      </div>
      <div className="item-card_title">
        <div className="item-card_brand-name">{card.brandname}</div>
        <div className="item-card_brand-item">{card.name}</div>
      </div>
      <div className="item-card_details">
        <span className="details-price-tag">₴</span>
        {card.price}
      </div>
      <div className="item-card_details quantity-detailt">
        {card.quantity > 0 ? (
          <></>
        ) : (
          //  <span className="in-stock">В наявності</span>
          <span className="out-of-stock">Немає в наявності</span>
        )}
      </div>
      {/* <div className="addToWishlist" title="Додати в улюблені">
    <span className="icon-heart"></span>
  </div> */}
    </Link>
  ) : (
    <div className={`item-card ${!card.quantity && 'card-disabled'}`}>
      <div className="item-card_img">
        <img src={card?.imageURL} alt={card.name} />
      </div>
      <div className="item-card_title">
        <div className="item-card_brand-name">{card.brandname}</div>
        <div className="item-card_brand-item">{card.name}</div>
      </div>
      <div className="item-card_details">
        <span className="details-price-tag">₴</span>
        {card.price}
      </div>
      <div className="item-card_details quantity-detailt">
        {card.quantity > 0 ? (
          <></>
        ) : (
          //  <span className="in-stock">В наявності</span>
          <span className="out-of-stock">Немає в наявності</span>
        )}
      </div>
      {/* <div className="addToWishlist" title="Додати в улюблені">
        <span className="icon-heart"></span>
      </div> */}
    </div>
  );
};

export default Card;
