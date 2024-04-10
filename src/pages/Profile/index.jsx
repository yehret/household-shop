import './styles.css';
import UserActions from '../../components/UserActions';
import AuthForm from '../../components/AuthForm';

const Profile = () => {
  const user = false;

  return user ? <UserActions /> : <AuthForm />;
};

export default Profile;
