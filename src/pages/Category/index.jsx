import Card from '../../components/Card';
import './styles.css';

const Category = () => {
  return (
    <section>
      <div>
        <h1 className="title">category name</h1>
      </div>
      <div className="sort-section_head">
        <div className="sort-section">
          <span>Сортувати за: </span>
          <span className="sort-button" onClick>
            Ціна
          </span>
        </div>
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
