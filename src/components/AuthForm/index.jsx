import { useState } from 'react';
import './styles.css';

const AuthForm = () => {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <section className="account-login">
      {isRegister ? (
        <SigninForm setIsRegister={setIsRegister} />
      ) : (
        <LoginForm setIsRegister={setIsRegister} />
      )}
    </section>
  );
};

const LoginForm = ({ setIsRegister }) => {
  return (
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
            <button onClick={() => setIsRegister(true)} className="registernow-button">
              Зареєструватись
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const SigninForm = ({ setIsRegister }) => {
  return (
    <div>
      <div>
        <h1>Створення акаунту</h1>
      </div>
      <div>
        <div className="auth-wrapper">
          <div className="login-form">
            <form className="form-list">
              <div className="form-list__multi-item">
                <div className="form-list__item">
                  <label htmlFor="Firstname">Ім`я</label>
                  <input type="text" name="Firstname" />
                </div>
                <div className="form-list__item">
                  <label htmlFor="Lastname">Прізвище</label>
                  <input type="text" name="Lastname" />
                </div>
              </div>
              <div className="form-list__item">
                <label htmlFor="Email">Ел. пошта</label>
                <input type="text" name="Email" />
              </div>
              <div className="form-list__item">
                <label htmlFor="Phone">Номер телефону</label>
                <input value={'+38'} type="tel" name="Phone" />
              </div>
              <div className="form-list__item">
                <label htmlFor="Password">Пароль</label>
                <div className="passwordcontainer">
                  {/* <span className="icon icon-eye"></span> */}
                  <input type="password" name="Password" />
                </div>
              </div>
              <div className="form-list__item">
                <label htmlFor="Password">Повторіть пароль</label>
                <div className="passwordcontainer">
                  {/* <span className="icon icon-eye"></span> */}
                  <input type="password" name="Password" />
                </div>
              </div>
            </form>
            <button className="login-button">Увійти</button>
          </div>
          <div className="registration-block">
            <h3>Вже маєте обліковий запис?</h3>
            <p>Якщо у вас вже є створений акаунт, Ви можете просто увійти</p>
            <button onClick={() => setIsRegister(false)} className="registernow-button">
              Увійти
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
