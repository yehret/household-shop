import { useEffect, useState } from 'react';
import ProductListItem from '../../components/ProductListItem';
import axios from '../../utils/axios';
import './styles.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const res = await axios.get('products');
        setProducts(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProductList();
  }, []);

  return (
    <section>
      <div>
        <div className="account-section-orders">
          <h2 className="account-section__header">Список товарів</h2>
          {products.map((item) => {
            return <ProductListItem key={item._id} item={item} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductList;
