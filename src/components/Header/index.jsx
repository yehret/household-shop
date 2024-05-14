import { Link } from 'react-router-dom';
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
  const dispatch = useDispatch();

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

  return (
    <>
      {isOpen && <CartModal isOpen={isOpen} setIsOpen={setIsOpen} />}
      <header className="header">
        <div>
          <div className="header-content">
            <div className="header-logo">
              <Link to={'/'}>Лого</Link>
            </div>
            <div className="header-menu">
              <div className="header-links">
                <Link className="link-item">Контакти</Link>
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
            <div className="nav-search nav-item icon search-icon">&nbsp;</div>
            <Link
              className="category-item nav-item"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}>
              <span className="icon icon-categories"></span>
              Категорії
            </Link>
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
