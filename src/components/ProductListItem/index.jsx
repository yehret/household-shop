import { Link } from 'react-router-dom';

const ProductListItem = ({ item }) => {
  return (
    <div className="productlist-item__wrapper">
      <div className="productlist-item__image">
        <Link>
          <img
            src={
              item.imageURL ||
              'https://st2.depositphotos.com/2493575/5398/i/450/depositphotos_53989081-stock-photo-black-texture.jpg'
            }
            alt="product title"
          />
        </Link>
      </div>
      <div className="productlist-item__details">
        <Link className="productlist-item__title">
          <strong>{item.brandname}</strong> — {item.name}
        </Link>
        <strong className="productlist-item__pricetag">Ціна: ₴{item.price}</strong>
        <div className="productlist-item__quantity">
          Кількість: <strong>{item.quantity}</strong>
        </div>
      </div>
    </div>
  );
};

export default ProductListItem;
