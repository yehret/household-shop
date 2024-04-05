import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Category from './pages/Category';
import Product from './pages/Product';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path=":categoryname" element={<Category />} />
        <Route path=":categoryname/:productId" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
