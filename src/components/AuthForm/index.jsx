import { useState } from 'react';
import './styles.css';
import { useDispatch } from 'react-redux';
import { loginFailure, loginStart, loginSuccess } from '../../redux/userSlice';
import axios from '../../utils/axios';
import { useNavigate } from 'react-router-dom';

const AuthForm = () => {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <section className="account-login">
      {isRegister ? (
        <RegisterForm setIsRegister={setIsRegister} />
      ) : (
        <LoginForm setIsRegister={setIsRegister} />
      )}
    </section>
  );
};

const LoginForm = ({ setIsRegister }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const res = await axios.post('auth/signin', { email, password });
      dispatch(loginSuccess(res.data));
      navigate('/');
    } catch (error) {
      dispatch(loginFailure());
    }
  };

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
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  name="Email"
                />
              </div>
              <div className="form-list__item">
                <label htmlFor="Password">Пароль</label>
                <div className="passwordcontainer">
                  <span
                    onClick={() => setShowPassword(!showPassword)}
                    className={`icon ${showPassword ? 'icon-eye-visible' : 'icon-eye'}`}></span>
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type={showPassword ? 'text' : 'password'}
                    name="Password"
                  />
                </div>
              </div>
            </form>
            <button onClick={handleLogin} className="login-button">
              Увійти
            </button>
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

const RegisterForm = ({ setIsRegister }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [middlename, setMiddlename] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('+38');
  const [password, setPassword] = useState('123');
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const res = await axios.post('auth/signup', {
        name,
        surname,
        middlename,
        email,
        phoneNumber,
        password,
      });
      dispatch(loginSuccess(res.data));
      navigate('/');
    } catch (error) {
      dispatch(loginFailure());
      console.log(error);
    }
  };

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
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    name="Firstname"
                  />
                </div>
                <div className="form-list__item">
                  <label htmlFor="Lastname">Прізвище</label>
                  <input
                    value={surname}
                    onChange={(e) => setSurname(e.target.value)}
                    type="text"
                    name="Lastname"
                  />
                </div>
              </div>
              <div className="form-list__item">
                <label htmlFor="Middlename">По батькові</label>
                <input
                  value={middlename}
                  onChange={(e) => setMiddlename(e.target.value)}
                  type="text"
                  name="Middlename"
                />
              </div>
              <div className="form-list__item">
                <label htmlFor="Email">Ел. пошта</label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  name="Email"
                />
              </div>
              <div className="form-list__item">
                <label htmlFor="Phone">Номер телефону</label>
                <input
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  type="tel"
                  name="Phone"
                />
              </div>
              <div className="form-list__item">
                <label htmlFor="Password">Пароль</label>
                <div className="passwordcontainer">
                  <span
                    onClick={() => setShowPassword(!showPassword)}
                    className={`icon ${showPassword ? 'icon-eye-visible' : 'icon-eye'}`}></span>
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type={showPassword ? 'text' : 'password'}
                    name="Password"
                  />
                </div>
              </div>
              {/* <div className="form-list__item">
                <label htmlFor="Password">Повторіть пароль</label>
                <div className="passwordcontainer">
                  <span className="icon icon-eye"></span>
                  <input type="password" name="Password" />
                </div>
              </div> */}
            </form>
            <button onClick={handleRegister} className="login-button">
              Зареєструватись
            </button>
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
