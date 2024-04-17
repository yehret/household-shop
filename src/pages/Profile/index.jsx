import './styles.css';
import UserActions from '../../components/UserActions';
import AuthForm from '../../components/AuthForm';
import { useSelector } from 'react-redux';

const Profile = () => {
  const { currentUser } = useSelector((state) => state.user);

  return currentUser ? <UserActions currentUser={currentUser} /> : <AuthForm />;
};

export default Profile;
