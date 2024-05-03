import axios from '../../utils/axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout, setPermission } from '../../redux/userSlice';
import AdminUser from './Actions/AdminUser';
import RegularUser from './Actions/RegularUser';
import { clearProfileOrders } from '../../redux/profileOrdersSlice';

const UserActions = ({ currentUser }) => {
  const { isPermission } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      try {
        const userRes = await axios.get(`users/checkuser/${currentUser._id}`);
        dispatch(setPermission(userRes.data.status));
      } catch (error) {
        console.log(error);
      }
    };

    getUser();
  }, [currentUser, dispatch]);

  const handleLogout = async () => {
    try {
      await axios.get('users/logout/');

      dispatch(logout());
      dispatch(clearProfileOrders());
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return isPermission ? (
    <AdminUser handleLogout={handleLogout} />
  ) : (
    <RegularUser handleLogout={handleLogout} />
  );
};

export default UserActions;
