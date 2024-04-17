import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../redux/userSlice';

const UserActions = ({ currentUser }) => {
  const [userStatus, setUserStatus] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(currentUser);

  console.log(userStatus);

  useEffect(() => {
    const getUser = async () => {
      try {
        const userRes = await axios.get(
          `http://localhost:8800/api/users/checkuser/${currentUser._id}`,
          {
            withCredentials: true,
            credentials: 'include',
          },
        );

        setUserStatus(userRes.data);
      } catch (error) {
        console.log(error);
      }
    };

    getUser();
  }, [currentUser]);

  const handleLogout = async () => {
    try {
      await axios.get('http://localhost:8800/api/users/logout', {
        withCredentials: true,
        credentials: 'include',
      });

      dispatch(logout());
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section>
      <div>
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

export default UserActions;
