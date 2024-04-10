import './styles.css';

const AuthForm = () => {
  return (
    <section className="account-login">
      <div>
        <div>
          <h1>Обліковий запис</h1>
        </div>
        <div>
          <div className="auth-wrapper">
            <div className="login-form">
              <h3>Вже зареєстровані?</h3>
              <form className="form-list">
                <div className="form-list__item">
                  <label htmlFor="Email">Ел. пошта</label>
                  <input type="text" name="Email" />
                </div>
                <div className="form-list__item">
                  <label htmlFor="Password">Пароль</label>
                  <div className="passwordcontainer">
                    {/* <span className="icon icon-eye"></span> */}
                    <input type="password" name="Password" />
                  </div>
                </div>
              </form>
              <button className="login-button">Увійти</button>
            </div>
            <div className="registration-block">
              <h3>Ще не маєте облікового запису?</h3>
              <p>Створіть, аби отримати переваги</p>
              <div className="checkmarks">
                <div>
                  <i className="icon icon-check"></i>
                  Переглядати поточні замовлення
                </div>
                <div>
                  <i className="icon icon-check"></i>
                  Зберігати товари до списку улюблених
                </div>
              </div>
              <button className="registernow-button">Зареєструватись</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthForm;
