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

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/:categoryname" element={<Category />} />
        <Route path="/:categoryname/:productId" element={<Product />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/customer-area" element={<Profile />} />
        <Route path="/customer-area/add-product" element={<AddProduct />} />
        <Route path="/customer-area/add-category" element={<AddCategory />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
