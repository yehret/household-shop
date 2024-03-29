import './styles.css';

const Card = () => {
  return (
    <div className="card">
      <a href="/" title="Сторінка категорії">
        <img
          src="https://www.stockphotosecrets.com/wp-content/uploads/2021/06/photocase_photo_id_3236595_square-550x550.jpg"
          alt="Card"
        />
        <div className="overlay-wrapper">
          <div className="overlay">
            <strong>Назва категорії</strong>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Card;
