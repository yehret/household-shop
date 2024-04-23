import { useEffect, useState } from 'react';
import Card from '../../components/Card';
import './styles.css';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import cyrillicToTranslit from 'cyrillic-to-translit-js';

const Category = () => {
  const [products, setProducts] = useState([]);
  const { pathname } = useLocation();
  const categoryTitle = pathname.charAt(1).toUpperCase() + pathname.slice(2);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(`http://localhost:8800/api/products/category${pathname}`);
        setProducts(res.data);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchProducts();
  }, [pathname]);

  return (
    <section>
      <div>
        <h1 className="title">{cyrillicToTranslit({ preset: 'uk' }).reverse(categoryTitle)}</h1>
      </div>
      <div className="sort-section_head">
        <div className="sort-section">
          <div className="sort-title">Сортувати за: </div>
          <div className="sort-button-wrapper">
            <span className="sb-title">Ціна</span>
            <span className="icon sb_icon sb_icon_img"></span>
          </div>
        </div>
      </div>
      <div className="cards-wrapper">
        {products.map((card) => {
          return <Card key={card._id} name={card.name} price={card.price} />;
        })}
      </div>
    </section>
  );
};

export default Category;
