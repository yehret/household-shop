import { Link } from 'react-router-dom';

const UserActions = () => {
  return (
    <section>
      <div>
        <h1>Адмін-панель</h1>
        <div className="account-section">
          <h2 className="account-section__header">Ваші замовлення</h2>
          <Link className="account-section__link">
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
          <Link className="account-section__link">
            <div>Видалити акаунт</div>
            <div className="account-section-arrow">
              <span className="icon icon-arrow"></span>
            </div>
          </Link>
          <Link className="account-section__link">
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

export default UserActions;
