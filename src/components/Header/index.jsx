import { Link, useNavigate } from 'react-router-dom';
import './styles.css';
import CartModal from '../CartModal';
import { useEffect, useState } from 'react';
import axios from '../../utils/axios';
import cyrillicToTranslit from 'cyrillic-to-translit-js';
import cyrillicToTranslitWithDash from '../../utils/cyrillicToTranslitWithDash';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStart, fetchSuccess } from '../../redux/categorySlice';

const Header = () => {
  const { orderStack } = useSelector((state) => state.cart);
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { categories, loading } = useSelector((state) => state.category);
  const [q, setQ] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      dispatch(fetchStart());
      try {
        const res = await axios.get('categories');
        dispatch(fetchSuccess(res.data));
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchCategories();
  }, [dispatch]);

  const renderCategories = () => {
    if (loading) {
      return <Link className="category-item nav-item">Завантаження...</Link>; // Display a loading indicator
    }

    return categories.map((category) => {
      const capitalizedName = category.name.charAt(0).toUpperCase() + category.name.slice(1);
      return (
        <Link
          to={`categories/${cyrillicToTranslitWithDash(category.name)}`}
          state={{ categoryName: category.name }}
          key={category._id}
          className="nav-dropdown__item">
          {capitalizedName}
        </Link>
      );
    });
  };

  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    q.length > 2 ? navigate(`/search?q=${q}`) : '';
  };

  return (
    <>
      {isOpen && <CartModal isOpen={isOpen} setIsOpen={setIsOpen} />}
      <header className="header">
        <div>
          <div className="header-content">
            <Link
              to={'/'}
              title="NovikHim - магазин побутових товарів — повернутись на головну"
              className="header-logo">
              NovikHim
            </Link>
            <div className="header-menu">
              <div className="header-links">
                <Link className="link-item">Home</Link>
              </div>
              <div className="header-function">
                <Link to="/customer-area" className="header-account icon icon-link account-icon">
                  Користувач
                </Link>
                <Link to="/favourites" className="header-fav">
                  <span className="icon icon-link fav-icon">Улюблені</span>
                </Link>
                <Link onClick={() => setIsOpen(!isOpen)} className="header-cart">
                  <span className="icon icon-badge-green">{orderStack.length}</span>
                  <span className="icon icon-link cart-icon">Кошик</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="header-nav">
            <form className="nav-search-module-input">
              <input
                onChange={(e) => setQ(e.target.value)}
                placeholder="Пошук..."
                type="text"
                minLength={3}
              />
              <button onClick={handleSearch} className="nav-search-input-button">
                <i className="icon search-icon">&nbsp;</i>
              </button>
            </form>
            <span
              className="category-item nav-item"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}>
              <span className="icon icon-categories"></span>
              <Link to={'categories'}>Категорії</Link>
            </span>
            <section
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className={`nav-dropdown ${isVisible && 'nav-open'}`}>
              <div>
                <div className="nav-dropdown__container">{renderCategories()}</div>
              </div>
            </section>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
