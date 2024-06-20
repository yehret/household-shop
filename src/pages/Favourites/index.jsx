import { Link } from 'react-router-dom';
import './styles.css';
import WishlistItem from '../../components/WishlistItem';
import { useEffect, useState } from 'react';
import axios from '../../utils/axios';
import { useDispatch } from 'react-redux';
import addToCart from '../../redux/cartSlice';
import { favourite } from '../../redux/userSlice';

const Favourites = () => {
  const [favourites, setFavourites] = useState([]);
  const dispatch = useDispatch();

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

  const handleRemoveFromFavourites = async (id) => {
    try {
      await axios.put(`users/removefromfavourites/${id}`, null);
      dispatch(favourite(favourite._id));
      setFavourites((prevFavourites) => prevFavourites.filter((fav) => fav._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section>
      <div>
        <h1 className="title">Список бажань</h1>
        <div className="wishlist">
          {favourites.length > 0 ? (
            <div>
              {favourites.map((favItem) => (
                <WishlistItem
                  key={favItem._id}
                  favourite={favItem}
                  handleRemoveFromFavourites={handleRemoveFromFavourites}
                />
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
