import axios from '../../utils/axios';
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
        const userRes = await axios.get(`users/checkuser/${currentUser._id}`);

        setUserStatus(userRes.data);
      } catch (error) {
        console.log(error);
      }
    };

    getUser();
  }, [currentUser]);

  const handleLogout = async () => {
    try {
      await axios.get('users/logout/');

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
