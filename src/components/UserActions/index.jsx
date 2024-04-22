import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../redux/userSlice';
import AdminUser from './Actions/AdminUser';
import RegularUser from './Actions/RegularUser';

const UserActions = ({ currentUser }) => {
  const [userStatus, setUserStatus] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  return userStatus.status == true ? (
    <AdminUser handleLogout={handleLogout} />
  ) : (
    <RegularUser handleLogout={handleLogout} />
  );
};

export default UserActions;
