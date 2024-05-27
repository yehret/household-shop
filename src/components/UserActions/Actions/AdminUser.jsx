import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from '../../../utils/axios';

const AdminUser = ({ handleLogout }) => {
  const [notapproved, setNotapproved] = useState([]);

  useEffect(() => {
    const getDropshippers = async () => {
      try {
        const usersRes = await axios.get('/users/dropshippers/not-approved');

        setNotapproved(usersRes.data);
      } catch (error) {
        console.log(error);
      }
    };

    getDropshippers();
  }, []);

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
              {notapproved.length > 0 ? (
                <span className="account-section__link-title-badge">
                  <p>{notapproved.length}</p>
                </span>
              ) : (
                ''
              )}
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
