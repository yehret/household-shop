import './styles.css';
import Card from '../../components/Card';

const Home = () => {
  return (
    <section>
      <div>
        <h1 className="title">Каталог товарів по категоріям</h1>
      </div>
      <div className="cards-wrapper">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
};

export default Home;
