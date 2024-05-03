import './styles.css';
import CategoryCard from '../../components/CategoryCard';
import { useDispatch, useSelector } from 'react-redux';
import ContentLoader from 'react-content-loader';
import { useEffect, useState } from 'react';
import { fetchStart, fetchSuccess } from '../../redux/categorySlice';
import axios from '../../utils/axios';
import NotFound from '../../components/NotFound';

const Home = () => {
  const { categories, loading } = useSelector((state) => state.category);
  const dispatch = useDispatch();
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      dispatch(fetchStart());
      try {
        const res = await axios.get('categories');
        dispatch(fetchSuccess(res.data));
      } catch (error) {
        console.log(error.message);
        setIsError(true);
      }
    };

    fetchCategories();
  }, [dispatch]);

  const skeletons = [...new Array(4)].map((_, index) => <CategoryCardLoader key={index} />);
  const categoriesItems = categories.map((category) => {
    const capitalizedName = category.name.charAt(0).toUpperCase() + category.name.slice(1);
    return (
      <CategoryCard
        key={category._id}
        categoryName={capitalizedName}
        categoryImg={category.imgURL}
      />
    );
  });

  return (
    <section>
      <div>
        <h1 className="title">Каталог товарів за категоріями</h1>
      </div>
      {isError ? (
        <NotFound type={'categories'} />
      ) : (
        <div className="category-cards-wrapper">{loading ? skeletons : categoriesItems}</div>
      )}
    </section>
  );
};

export default Home;

const CategoryCardLoader = (props) => (
  <ContentLoader
    speed={2}
    width={540}
    height={420}
    viewBox="0 0 540 420"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <rect x="0" y="0" rx="5" ry="5" width="540" height="420" />
  </ContentLoader>
);
