import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './styles.css';

const CategoryCard = ({ categoryName }) => {
  const path = categoryName.toLowerCase();
  return (
    <div className="card">
      <Link to={`${path}`} title="Сторінка категорії">
        <img
          src="https://www.stockphotosecrets.com/wp-content/uploads/2021/06/photocase_photo_id_3236595_square-550x550.jpg"
          alt="Card"
        />
        <div className="overlay-wrapper">
          <div className="overlay">
            <strong>{categoryName}</strong>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CategoryCard;

CategoryCard.propTypes = {
  categoryName: PropTypes.string.isRequired, // Assuming categoryName is a string and is required
};
