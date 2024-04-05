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
          <div className="sort-title">Сортувати за: </div>
          <div className="sort-button-wrapper">
            <span className="sb-title">Ціна</span>
            <span className="icon sb_icon sb_icon_img"></span>
          </div>
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
