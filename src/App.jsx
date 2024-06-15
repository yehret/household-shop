import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Categories from './pages/Categories';
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
import ProductList from './pages/ProductList';
import ModalRoot from './components/ModalRoot';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import axios from './utils/axios';
import { loginSuccess } from './redux/userSlice';
import Search from './pages/Search';
import Home from './pages/Home';

function App() {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentUser) {
      const updateUserData = async () => {
        const userRes = await axios.get(`users/user-data/${currentUser?._id}`);

        dispatch(loginSuccess(userRes.data));
      };

      updateUserData();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser?._id, dispatch]);

  return (
    <BrowserRouter>
      <ModalRoot />
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/categories">
          <Route index element={<Categories />} />
          <Route path="/categories/:categoryname" element={<Category />} />
          <Route path="/categories/:categoryname/:productId" element={<Product />} />
        </Route>
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/search" element={<Search />} />
        <Route path="customer-area">
          <Route index element={<Profile />} />
          <Route path="all-orders" element={<AllOrders />} />
          <Route path="orders" element={<UserOrders />} />
          <Route path="add-product" element={<AddProduct />} />
          <Route path="add-category" element={<AddCategory />} />
          <Route path="dropship-program" element={<DropshipApplication />} />
          <Route path="dropshippers" element={<DropshipUsers />} />
          <Route path="product-list" element={<ProductList />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
