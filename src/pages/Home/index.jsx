import { Link } from 'react-router-dom';
import './styles.css';
import { useSelector } from 'react-redux';

const Home = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <section id="heroBannerPlacholder">
      <div>
        <div className="heroBanner">
          <div className="overlay-box overlay-right overlay-vertical">
            <div className="overlay-box-content">
              <div className="overlay-box__text">Вас вітає</div>
              <div className="overlay-box__title">NovikHim</div>
              <div className="overlay-box__links">
                <Link to={'categories'} className="overlay-box__button cta-button">
                  Каталог товарів
                </Link>
                <Link
                  to={currentUser ? 'customer-area/dropship-program' : 'customer-area'}
                  className="overlay-box__button cta-button">
                  Стати дропшипером
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
