import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Category from './pages/Category';
import Product from './pages/Product';
import Footer from './components/Footer';
import Favourites from './pages/Favourites';
import Profile from './pages/Profile';
import AddProduct from './pages/AddProduct';
import AddCategory from './pages/AddCategory';
import AllOrders from './pages/AllOrders';
import NoMatch from './pages/NoMatch';
import UserOrders from './pages/UserOrders';
import DropshipApplication from './pages/DropshipApplication';
import DropshipUsers from './pages/DropshipUsers';
import ModalRoot from './components/ModalRoot';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import axios from './utils/axios';
import { loginSuccess } from './redux/userSlice';

function App() {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const updateUserData = async () => {
      const userRes = await axios.get(`users/user-data/${currentUser._id}`);

      dispatch(loginSuccess(userRes.data));
    };

    updateUserData();
  }, [currentUser._id, dispatch]);

  return (
    <BrowserRouter>
      <ModalRoot />
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/categories/:categoryname" element={<Category />} />
        <Route path="/categories/:categoryname/:productId" element={<Product />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="customer-area">
          <Route index element={<Profile />} />
          <Route path="all-orders" element={<AllOrders />} />
          <Route path="orders" element={<UserOrders />} />
          <Route path="add-product" element={<AddProduct />} />
          <Route path="add-category" element={<AddCategory />} />
          <Route path="dropship-program" element={<DropshipApplication />} />
          <Route path="dropshippers" element={<DropshipUsers />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
