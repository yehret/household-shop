import { useDispatch, useSelector } from 'react-redux';
import axios from '../../utils/axios';
import { favourite } from '../../redux/userSlice';
import { addToCart } from '../../redux/cartSlice';

const ProductInfo = ({ productData }) => {
  const { currentUser } = useSelector((state) => state.user);
  const { orderStack } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const handleFavourite = async () => {
    try {
      await axios.put(`users/addtofavourites/${productData._id}`, null);
      dispatch(favourite(productData._id));
    } catch (error) {
      console.log(error);
    }
  };

  const handleUnFavoutire = async () => {
    try {
      await axios.put(`users/removefromfavourites/${productData._id}`, null);
      dispatch(favourite(productData._id));
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddToCart = () => {
    dispatch(addToCart(productData));
  };

  return (
    <section className="product-wrapper">
      <div>
        <div className="product-gallery">
          <img
            className="img-preview"
            alt="productimg"
            src={
              productData.imageURL ||
              'https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/blurred-gray-background-brandon-bourdages.jpg'
            }
          />
        </div>
        <div className="product-details">
          <h1 className="product-title">{productData.name}</h1>
          <div className="product-rating">
            <div className="rating-section">
              <div className="rating-stars">
                <div className="rating-star-icon">
                  <i className="icon-star"></i>
                </div>
                <div className="rating-star-icon">
                  <i className="icon-star"></i>
                </div>
                <div className="rating-star-icon">
                  <i className="icon-star"></i>
                </div>
                <div className="rating-star-icon">
                  <i className="icon-star"></i>
                </div>
                <div className="rating-star-icon">
                  <i className="icon-star"></i>
                </div>
              </div>
              <div className="reviews-count">n відгуків</div>
            </div>
          </div>
          <div className="product-price">
            <div className="price-value">
              <span className="details-price-tag">₴</span>
              {productData.price}
            </div>
            <div className="availability-notice">
              <i className="icon icon-truck"></i>
              <span>
                <strong className="green">
                  {productData.quantity > 0 ? (
                    <span className="in-stock">В наявності</span>
                  ) : (
                    <span className="out-of-stock">Немає в наявності</span>
                  )}
                </strong>
              </span>
            </div>
          </div>
          <div className="product-cart">
            <div className="addToCartButton">
              <button onClick={handleAddToCart} className="addtocart">
                Додати у кошик
              </button>
            </div>
            {currentUser?.favourites?.includes(productData._id) ? (
              <div className="addToWishlistButton">
                <div className="addtowishlist">
                  <span onClick={handleUnFavoutire} className="icon icon-unwishlist"></span>
                </div>
              </div>
            ) : (
              <div className="addToWishlistButton">
                <div className="addtowishlist">
                  <span onClick={handleFavourite} className="icon icon-wishlist"></span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductInfo;
