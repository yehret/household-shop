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

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/categories/:categoryname" element={<Category />} />
        <Route path="/categories/:categoryname/:productId" element={<Product />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/customer-area/" element={<Profile />} />
        <Route path="/customer-area/all-orders" element={<AllOrders />} />
        <Route path="/customer-area/orders" element={<UserOrders />} />
        <Route path="/customer-area/add-product" element={<AddProduct />} />
        <Route path="/customer-area/add-category" element={<AddCategory />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
