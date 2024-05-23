import { Link } from 'react-router-dom';

const AdminUser = ({ handleLogout }) => {
  return (
    <section>
      <div>
        <div className="account-section">
          <h2 className="account-section__header">Адмін-панель</h2>
          <Link to="all-orders" className="account-section__link">
            <div>Замовлення</div>
            <div className="account-section-arrow">
              <span className="icon icon-arrow"></span>
            </div>
          </Link>
          <Link to="/customer-area/add-category" className="account-section__link">
            <div>Додати категорію</div>
            <div className="account-section-arrow">
              <span className="icon icon-arrow"></span>
            </div>
          </Link>
          <Link to="/customer-area/add-product" className="account-section__link">
            <div>Додати товар</div>
            <div className="account-section-arrow">
              <span className="icon icon-arrow"></span>
            </div>
          </Link>
          <Link to="/customer-area/dropshippers" className="account-section__link">
            <div className="account-section__link-title">
              <div>Дропшипери</div>
              <span className="account-section__link-title-badge">
                <p>10</p>
              </span>
            </div>
            <div className="account-section-arrow">
              <span className="icon icon-arrow"></span>
            </div>
          </Link>
          <Link onClick={handleLogout} className="account-section__link">
            <div>Вийти</div>
            <div className="account-section-arrow">
              <span className="icon icon-arrow"></span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AdminUser;
