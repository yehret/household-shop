import { Link } from 'react-router-dom';
import './styles.css';
import WishlistItem from '../../components/WishlistItem';

const Favourites = () => {
  return (
    <section>
      <div>
        <h1 className="title">Список бажань</h1>
        <div className="wishlist">
          <div>
            <WishlistItem />
            <WishlistItem />
            <WishlistItem />
          </div>
          <WishlistEmpty />
        </div>
      </div>
    </section>
  );
};

const WishlistEmpty = () => {
  return (
    <div className="wishlist-empty">
      <p>На даний момент у вас немає бажаних товарів</p>
      <p>Але Ви завжди можете віднайти їх у каталозі :)</p>
      <Link to={'/'} className="cart-button">
        Переглянути каталог товарів
      </Link>
    </div>
  );
};

export default Favourites;
