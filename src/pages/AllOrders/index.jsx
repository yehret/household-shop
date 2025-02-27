import { useEffect } from 'react';
import OrderItem from '../../components/OrderItem';
import './styles.css';
import axios from '../../utils/axios';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStart, fetchSuccess } from '../../redux/profileOrdersSlice';

const AllOrders = () => {
  const { orders } = useSelector((state) => state.profileOrders);
  const dispatch = useDispatch();

  useEffect(() => {
    const getOrders = async () => {
      dispatch(fetchStart());
      const orderRes = await axios.get('orders');

      dispatch(fetchSuccess(orderRes.data));
    };

    getOrders();
  }, [dispatch]);

  return (
    <section>
      <div>
        <div className="account-section-orders">
          <h2 className="account-section__header">Замовлення</h2>
          {orders.map((item) => {
            return <OrderItem isAccess={true} key={item._id} itemData={item} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default AllOrders;
