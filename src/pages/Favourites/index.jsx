import { Link } from 'react-router-dom';
import './styles.css';
import WishlistItem from '../../components/WishlistItem';
import { useEffect, useState } from 'react';
import axios from '../../utils/axios';

const Favourites = () => {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const fetchFavourites = async () => {
      try {
        const favouritesRes = await axios.get('products/favourites');

        setFavourites(favouritesRes.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchFavourites();
  }, []);

  return (
    <section>
      <div>
        <h1 className="title">Список бажань</h1>
        <div className="wishlist">
          {favourites.length > 0 ? (
            <div>
              {favourites.map((favItem) => (
                <WishlistItem key={favItem._id} favourite={favItem} />
              ))}
            </div>
          ) : (
            <WishlistEmpty />
          )}
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
