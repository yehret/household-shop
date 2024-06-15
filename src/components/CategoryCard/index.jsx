import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './styles.css';
import cyrillicToTranslitWithDash from '../../utils/cyrillicToTranslitWithDash';

const CategoryCard = ({ categoryName, categoryImg }) => {
  return (
    <div className="card">
      <Link
        to={`categories/${cyrillicToTranslitWithDash(categoryName)}`}
        state={{ categoryName }}
        title={categoryName}>
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
