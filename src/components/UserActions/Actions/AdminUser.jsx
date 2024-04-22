import { Link } from 'react-router-dom';

const AdminUser = ({ handleLogout }) => {
  return (
    <section>
      <div>
        <div className="account-section">
          <h2 className="account-section__header">Адмін-панель</h2>
          <Link className="account-section__link">
            <div>Замовлення</div>
            <div className="account-section-arrow">
              <span className="icon icon-arrow"></span>
            </div>
          </Link>
          <Link className="account-section__link">
            <div>Додати категорію</div>
            <div className="account-section-arrow">
              <span className="icon icon-arrow"></span>
            </div>
          </Link>
          <Link className="account-section__link">
            <div>Додати товар</div>
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
