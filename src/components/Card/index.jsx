import { Link } from 'react-router-dom';
import './styles.css';

const Card = () => {
  return (
    <Link className="item-card">
      <div className="item-card_img">
        <img
          src="https://img.freepik.com/premium-wektory/slodki-chomik-w-stylu-pixel-art_475147-1281.jpg?w=360"
          alt=""
        />
      </div>
      <div className="item-card_title">Title</div>
      <div className="item-card_details">price</div>
    </Link>
  );
};

export default Card;
