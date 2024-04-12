import { Link } from 'react-router-dom';
import './styles.css';
import CartModal from '../CartModal';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get('http://localhost:8800/api/categories');
        setCategories(res.data);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchCategories();
  }, []);

  let capitalizedCategories = categories.map((obj) => {
    return {
      ...obj,
      name: obj.name.charAt(0).toUpperCase() + obj.name.slice(1),
    };
  });

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
                <Link to="/profile" className="header-account icon icon-link account-icon">
                  Користувач
                </Link>
                <Link to="/favourites" className="header-fav">
                  <span className="icon icon-link fav-icon">Улюблені</span>
                </Link>
                <Link onClick={() => setIsOpen(!isOpen)} className="header-cart">
                  <span className="icon icon-link cart-icon">Кошик</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="header-nav">
            <div className="nav-search nav-item icon search-icon">&nbsp;</div>
            {capitalizedCategories.map((category) => {
              return (
                <Link key={category._id} className="category-item nav-item">
                  {category.name}
                </Link>
              );
            })}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
