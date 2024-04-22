import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './styles.css';

const CategoryCard = ({ categoryName, categoryImg }) => {
  const path = categoryName.toLowerCase();
  return (
    <div className="card">
      <Link to={`${path}`} title="Сторінка категорії">
        <img
          src={
            categoryImg
              ? categoryImg
              : 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/blurred-gray-background-brandon-bourdages.jpg'
          }
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
