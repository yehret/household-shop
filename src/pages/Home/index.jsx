import './styles.css';
import CategoryCard from '../../components/CategoryCard';

const Home = () => {
  return (
    <section>
      <div>
        <h1 className="title">Каталог товарів по категоріям</h1>
      </div>
      <div className="category-cards-wrapper">
        <CategoryCard categoryName={'kitchen'} />
        <CategoryCard categoryName={'kitchen'} />
        <CategoryCard categoryName={'kitchen'} />
        <CategoryCard categoryName={'kitchen'} />
        <CategoryCard categoryName={'kitchen'} />
      </div>
    </section>
  );
};

export default Home;
