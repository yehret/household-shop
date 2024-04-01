import Card from '../../components/Card';
import './styles.css';

const Category = () => {
  return (
    <section>
      <div>
        <h1 className="title">category name</h1>
      </div>
      <div className="cards-wrapper">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
};

export default Category;
