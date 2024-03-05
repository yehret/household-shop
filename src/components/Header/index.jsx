import './styles.css';

const Header = () => {
  const categories = ['Категорія1', 'Категорія2', 'Категорія3'];

  return (
    <div className="header">
      <div className="header-content">
        <div className="header-logo">
          <a href="./">Лого</a>
        </div>
        <div className="header-menu">
          <div className="header-links">
            <a className="link-item">Контакти</a>
          </div>
          <div className="header-function">
            <div className="header-account icon icon-link account-icon">Користувач</div>
            <div className="header-fav icon icon-link fav-icon">Улюблені</div>
          </div>
        </div>
      </div>
      <div className="header-nav">
        <div className="nav-search nav-item icon search-icon">&nbsp;</div>
        {categories.map((categoryName, index) => {
          return (
            <div key={index} className="nav-item">
              {categoryName}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
