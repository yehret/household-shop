import { useEffect, useState } from 'react';
import OrderItem from '../../components/OrderItem';
import './styles.css';
import axios from '../../utils/axios';

const AllOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      const orderRes = await axios.get('orders');

      setOrders(orderRes.data);
    };

    getOrders();
  }, []);

  return (
    <section>
      <div>
        <div className="account-section-orders">
          <h2 className="account-section__header">Замовлення</h2>
          {orders.map((item) => {
            return <OrderItem key={item._id} itemData={item} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default AllOrders;
