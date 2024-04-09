import { Link } from 'react-router-dom';
import './styles.css';

const Favourites = () => {
  return (
    <section>
      <div>
        <h1 className="title">Список бажань</h1>
        <div className="wishlist">
          <div className="wishlist-empty">
            <p>На даний момент у вас немає бажаних товарів</p>
            <p>Але Ви завжди можете віднайти їх у каталозі :)</p>
            <Link to={'/'} className="cart-button">
              Переглянути каталог товарів
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Favourites;
