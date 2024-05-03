import OrderProductItem from './OrderProductItem';

const OrderItem = ({ itemData, isAccess }) => {
  const checkOrderStatus = (status) => {
    switch (status) {
      case 'очікує підтвердження':
        return 'yellow-status';
      case 'в обробці':
        return 'blue-status';
      case 'виконано':
        return 'green-status';
      case 'скасовано':
        return 'red-status';
    }
  };

  const [datePart, timePart] = itemData.createdAt.split('T');

  const [year, month, day] = datePart.split('-');
  const formattedDate = `${day}.${month}.${year}`;

  const [hour, minute] = timePart.split(':');
  const formattedTime = `${hour}:${minute}`;

  return (
    <div className="account-section__item">
      <div className="account-section__order-data">
        <div className="account-section__order-number">
          <span>Номер замовлення: {itemData.orderId}</span>
        </div>
        <div className="account-section__order-date">
          <span>
            Дата оформлення: {formattedDate} {formattedTime}
          </span>
        </div>
        <div className="account-section__order-status">
          <div className="order-status">
            <div className={`order-status-name ${checkOrderStatus(itemData.status)}`}>
              {itemData.status.charAt(0).toUpperCase() + itemData.status.slice(1)}
            </div>
          </div>
        </div>
      </div>
      <div className="account-section__client-data">
        {isAccess && (
          <span>
            Від: {itemData.clientLastname} {itemData.clientName} {itemData.clientMiddlename}
          </span>
        )}
      </div>
      <div className="account-section__order-products">
        {itemData.orderStack.map((item) => {
          return <OrderProductItem key={item.productId} itemData={item} />;
        })}
      </div>
      <div className="account-section__order-actions">
        <div className="order-cancel-button order-action-button">
          <span>Скасувати замовлення</span>
        </div>
        {isAccess && (
          <>
            <div className="order-accept-button order-action-button">
              <span>Підтвердити замовлення</span>
            </div>
            <div className="order-complete-button order-action-button">
              <span>Позначити як виконане</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default OrderItem;
