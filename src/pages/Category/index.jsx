import { useEffect, useState } from 'react';
import Card from '../../components/Card';
import './styles.css';
import { useLocation } from 'react-router-dom';
import axios from '../../utils/axios';
import cyrillicToTranslit from 'cyrillic-to-translit-js';
import ContentLoader from 'react-content-loader';
import NotFound from '../../components/NotFound';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStart, fetchSuccess } from '../../redux/productsSlice';

const Category = () => {
  const { products, loading } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const [isError, setIsError] = useState(false);

  const splitPathname = (pathname) => {
    const parts = pathname.split('/');
    const path = parts[parts.length - 1];
    return path;
  };

  useEffect(() => {
    const fetchProducts = async () => {
      dispatch(fetchStart());
      setIsError(false);
      try {
        const res = await axios.get(`products/category/${splitPathname(pathname)}`);
        dispatch(fetchSuccess(res.data));
      } catch (error) {
        console.log(error.message);
        setIsError(true);
      }
    };

    fetchProducts();
  }, [pathname, dispatch]);

  const renderProducts = () => {
    if (loading) {
      return [...new Array(4)].map((_, index) => <ProductSkeleton key={index} />); // Display a loading indicator
    }
    return products.map((card) => {
      return <Card key={card._id} card={card} />;
    });
  };

  return (
    <section>
      <div>
        <h1 className="title">
          {cyrillicToTranslit({ preset: 'uk' }).reverse(
            splitPathname(pathname).charAt(0).toUpperCase() + splitPathname(pathname).slice(1),
          )}
        </h1>
      </div>
      {isError || (
        <div className="sort-section_head">
          <div className="sort-section">
            <div className="sort-title">Сортувати за: </div>
            <div className="sort-button-wrapper">
              <span className="sb-title">Ціна</span>
              <span className="icon sb_icon sb_icon_img"></span>
            </div>
          </div>
        </div>
      )}
      {isError ? (
        <NotFound type={'products'} />
      ) : (
        <div className="cards-wrapper">{renderProducts()}</div>
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
