import { useEffect } from 'react';
import OrderItem from '../../components/OrderItem';
import axios from '../../utils/axios';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStart, fetchSuccess } from '../../redux/profileOrdersSlice';

const UserOrders = () => {
  const { currentUser } = useSelector((state) => state.user);
  const { orders } = useSelector((state) => state.profileOrders);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchOrders = async () => {
      dispatch(fetchStart());
      const ordersRes = await axios.get(`orders/${currentUser.phoneNumber}`);

      dispatch(fetchSuccess(ordersRes.data));
    };

    fetchOrders();
  }, [dispatch, currentUser]);

  return (
    <section>
      <div>
        <div className="account-section-orders">
          <h2 className="account-section__header">Замовлення</h2>
          {orders.map((item) => {
            return <OrderItem isAccess={false} key={item._id} itemData={item} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default UserOrders;
