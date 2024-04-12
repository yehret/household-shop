import './styles.css';
import CategoryCard from '../../components/CategoryCard';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get('http://localhost:8800/api/categories');
        setCategories(res.data);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchCategories();
  }, []);

  let capitalizedCategories = categories.map((obj) => {
    return {
      ...obj,
      name: obj.name.charAt(0).toUpperCase() + obj.name.slice(1),
    };
  });

  return (
    <section>
      <div>
        <h1 className="title">Каталог товарів за категоріями</h1>
      </div>
      <div className="category-cards-wrapper">
        {capitalizedCategories.map((category) => (
          <CategoryCard key={category._id} categoryName={category.name} />
        ))}
      </div>
    </section>
  );
};

export default Home;
