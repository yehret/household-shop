import { Link } from 'react-router-dom';
import './styles.css';

const Header = () => {
  const categories = ['Категорія1', 'Категорія2', 'Категорія3'];

  return (
    <header className="header">
      <div>
        <div className="header-content">
          <div className="header-logo">
            <a href="./">Лого</a>
          </div>
          <div className="header-menu">
            <div className="header-links">
              <Link className="link-item">Контакти</Link>
            </div>
            <div className="header-function">
              <Link className="header-account icon icon-link account-icon">Користувач</Link>
              <Link className="header-fav icon icon-link fav-icon">Улюблені</Link>
            </div>
          </div>
        </div>
        <div className="header-nav">
          <div className="nav-search nav-item icon search-icon">&nbsp;</div>
          {categories.map((categoryName, index) => {
            return (
              <Link key={index} className="category-item nav-item">
                {categoryName}
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
};

export default Header;
