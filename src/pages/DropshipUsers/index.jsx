import DropshipUserItem from '../../components/DropshipUserItem';
import axios from '../../utils/axios';
import { useEffect, useState } from 'react';

const DropshipUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const usersRes = await axios.get('/users/dropshippers');

        setUsers(usersRes.data);
      } catch (error) {
        console.log(error);
      }
    };

    getUsers();
  }, []);

  return (
    <section>
      <div className="account-section-dropshippers">
        <h2 className="account-section__header">Дропшипери</h2>
        {users.map((user, index) => {
          return <DropshipUserItem key={index} user={user} />;
        })}
      </div>
    </section>
  );
};

export default DropshipUsers;
