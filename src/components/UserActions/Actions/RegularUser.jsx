import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const RegularUser = ({ handleLogout }) => {
  const { currentUser } = useSelector((state) => state.user);

  const handleCancelDropshipping = async () => {};

  return (
    <section>
      <div>
        <div className="account-section">
          <h2 className="account-section__header">Ваші замовлення</h2>
          <Link to={'/customer-area/orders'} className="account-section__link">
            <div>Замовлення</div>
            <div className="account-section-arrow">
              <span className="icon icon-arrow"></span>
            </div>
          </Link>
          <Link className="account-section__link">
            <div>Відгуки</div>
            <div className="account-section-arrow">
              <span className="icon icon-arrow"></span>
            </div>
          </Link>
          {currentUser.dropshipperInfo.status && (
            <Link to={'/customer-area/product-list'} className="account-section__link">
              <div>Список товарів</div>
              <div className="account-section-arrow">
                <span className="icon icon-arrow"></span>
              </div>
            </Link>
          )}
        </div>
        <div className="account-section">
          <h2 className="account-section__header">Ваші дані</h2>
          <Link className="account-section__link">
            <div>Особисті дані</div>
            <div className="account-section-arrow">
              <span className="icon icon-arrow"></span>
            </div>
          </Link>
        </div>
        <div className="account-section">
          <h2 className="account-section__header">Ваш обліковий запис</h2>
          {!currentUser.dropshipperInfo.status && (
            <Link to={'/customer-area/dropship-program'} className="account-section__link">
              <div>Стати дропшипером</div>
              <div className="account-section-arrow">
                <span className="icon icon-arrow"></span>
              </div>
            </Link>
          )}
          {currentUser.dropshipperInfo.status && (
            <Link onClick={handleCancelDropshipping} className="account-section__link">
              <div>Відмінити дропшипінг партнерство</div>
              <div className="account-section-arrow">
                <span className="icon icon-arrow"></span>
              </div>
            </Link>
          )}
          <Link className="account-section__link">
            <div>Видалити акаунт</div>
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

export default RegularUser;
