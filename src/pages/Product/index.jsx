import { useEffect, useState } from 'react';
import Accordion from '../../components/Accordion';
import ProductInfo from '../../components/ProductInfo';
import './styles.css';
import { useLocation } from 'react-router-dom';
import axios from '../../utils/axios';

const Product = () => {
  const [productData, setProductData] = useState({});
  const { pathname } = useLocation();
  const productId = pathname.split('/')[3];

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productRes = await axios.get(`products/${productId}`);
        setProductData(productRes.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProduct();
  }, [productId]);

  return (
    <>
      <ProductInfo productData={productData} />
      <Accordion productData={productData} />
    </>
  );
};

export default Product;
