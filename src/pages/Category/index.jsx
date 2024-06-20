import { useEffect, useState } from 'react';
import Card from '../../components/Card';
import './styles.css';
import { useLocation } from 'react-router-dom';
import axios from '../../utils/axios';
import ContentLoader from 'react-content-loader';
import NotFound from '../../components/NotFound';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStart, fetchSuccess } from '../../redux/productsSlice';
import { capitalizeFirstLetter } from '../../utils/capitalizeFirstLetter';

const Category = () => {
  const { products, loading } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [isError, setIsError] = useState(false);

  const location = useLocation();
  const categoryName = location.state.categoryName;

  useEffect(() => {
    const fetchProducts = async () => {
      dispatch(fetchStart());
      setIsError(false);
      try {
        const res = await axios.get(`products/category/${categoryName.toLowerCase()}`);
        dispatch(fetchSuccess(res.data));
      } catch (error) {
        console.log(error.message);
        setIsError(true);
      }
    };

    fetchProducts();
  }, [dispatch, categoryName]);

  const skeletons = [...new Array(4)].map((_, index) => <ProductSkeleton key={index} />);
  const productsItems = products.map((card) => {
    return <Card key={card._id} card={card} />;
  });

  //   const handleSort = async () => {};

  return (
    <section>
      <div>
        <h1 className="title">{capitalizeFirstLetter(categoryName)}</h1>
      </div>
      {isError || (
        <div className="sort-section_head feature-disabled">
          <div className="sort-section">
            <div className="sort-title">Сортувати за: </div>
            <div className="sort-button-wrapper feature-disabled">
              <span className="sb-title">Ціна</span>
              {/* <span className="icon sb_icon sb_icon_img "></span> */}
            </div>
          </div>
        </div>
      )}
      {isError ? (
        <NotFound type={'products'} />
      ) : (
        <div className="cards-wrapper">{loading ? skeletons : productsItems}</div>
      )}
    </section>
  );
};

const ProductSkeleton = (props) => (
  <ContentLoader
    speed={2}
    width={275}
    height={412}
    viewBox="0 0 275 412"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <rect x="6" y="0" rx="5" ry="5" width="260" height="310" />
    <rect x="6" y="318" rx="0" ry="0" width="260" height="20" />
    <rect x="6" y="346" rx="0" ry="0" width="130" height="20" />
    <rect x="6" y="375" rx="0" ry="0" width="65" height="20" />
  </ContentLoader>
);

export default Category;
