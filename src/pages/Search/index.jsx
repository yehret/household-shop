import React, { useEffect, useState } from 'react';
import NotFound from '../../components/NotFound';
import ContentLoader from 'react-content-loader';
import { capitalizeFirstLetter } from '../../utils/capitalizeFirstLetter';
import Card from '../../components/Card';
import { fetchStart, fetchSuccess } from '../../redux/productsSlice';
import { useDispatch, useSelector } from 'react-redux';
import axios from '../../utils/axios';
import { useLocation } from 'react-router-dom';

const Search = () => {
  const { products, loading } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [isError, setIsError] = useState(false);

  const query = useLocation().search;

  useEffect(() => {
    console.log(query);
    const fetchProducts = async () => {
      dispatch(fetchStart());
      setIsError(false);
      try {
        const res = await axios.get(`products/search${query}`);
        console.log(res);
        dispatch(fetchSuccess(res.data));
      } catch (error) {
        console.log(error.message);
        setIsError(true);
      }
    };

    fetchProducts();
  }, [query, dispatch]);

  const skeletons = [...new Array(4)].map((_, index) => <ProductSkeleton key={index} />);
  const productsItems = products.map((card) => {
    return <Card key={card._id} card={card} />;
  });

  return (
    <section>
      <div>
        <h1 className="title">Результати пошуку {`"${decodeURI(query.replace('?q=', ''))}"`}</h1>
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

export default Search;
