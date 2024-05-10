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

function App() {
  return (
    <BrowserRouter>
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
