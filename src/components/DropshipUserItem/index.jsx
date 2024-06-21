import { useState } from 'react';
import axios from '../../utils/axios';

const DropshipUserItem = ({ user }) => {
  const [userRole, setUserRole] = useState(user.role);

  const checkUserRole = (role) => {
    switch (role) {
      case 'wannabedropshipper':
        return 'yellow-status';
      case 'dropshipper':
        return 'blue-status';
    }
  };

  const handleConfirmUser = async (e) => {
    e.preventDefault();
    try {
      const userRes = await axios.put(`users/dropshippers/${user._id}`);

      setUserRole('dropshipper');
    } catch (error) {
      console.log(error);
    }
  };

  const [datePart, timePart] = user.updatedAt.split('T');

  const [year, month, day] = datePart.split('-');
  const formattedDate = `${day}.${month}.${year}`;

  const [hour, minute] = timePart.split(':');
  const formattedTime = `${hour}:${minute}`;

  return (
    <div className="account-section__item">
      <div className="account-section__order-data">
        <div className="account-section__order-date">
          <span>Дата заяви: {formattedDate}</span>
        </div>
        <div className="account-section__order-status">
          <div className="order-status">
            <div className={`order-status-name ${checkUserRole(userRole)}`}>
              {userRole == 'wannabedropshipper' ? 'Очікує підтвердження' : 'Підтверджено'}
            </div>
          </div>
        </div>
      </div>
      <div className="account-section__client-details">
        <p>
          {user.surname} {user.name} {user.middlename}
        </p>
        <p>Тел: {user.phoneNumber}</p>
        <p>Ел. пошта: {user.email}</p>
        <p>ДРФО: {user.dropshipperInfo.drfo}</p>
        <p>МФО: {user.dropshipperInfo.mfo}</p>
        <p>IBAN: {user.dropshipperInfo.iban}</p>
        <p>Банк: {user.dropshipperInfo.bankName}</p>
        <p>
          Адрес: {user.dropshipperInfo.country}, {user.dropshipperInfo.mailIndex},{' '}
          {user.dropshipperInfo.region} обл., {user.dropshipperInfo.district} р-н, м.
          {user.dropshipperInfo.city}, {user.dropshipperInfo.address}
        </p>
      </div>
      <div className="account-section__order-actions">
        <div className="order-cancel-button order-action-button">
          <span>Відмінити</span>
        </div>
        <div onClick={handleConfirmUser} className="order-accept-button order-action-button">
          <span>Підтвердити</span>
        </div>
        {/* <div className="order-complete-button order-action-button">
       <span>Позначити як виконане</span>
     </div> */}
      </div>
    </div>
  );
};

export default DropshipUserItem;
