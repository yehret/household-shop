import { Link } from 'react-router-dom';
import './styles.css';

const CartModal = ({ setIsOpen, isOpen }) => {
  return (
    <>
      <section className="cart-modal__full-screen">
        <div>
          <div>
            <div onClick={() => setIsOpen(!isOpen)} className="cart-modal__header">
              Лого
            </div>
            <div onClick={() => setIsOpen(!isOpen)} className="cart-modal__back-button">
              <i className="icon icon-return"></i>
              <span>Повернутись назад</span>
            </div>
          </div>
          <div className="cart-modal__wrapper">
            <div className="cart-modal__product-list">
              <div className="cart-modal__empty-cart">
                <p>Ваш кошик порожній.</p>
                <p>Ніколи не пізно це виправити :)</p>
                <Link to={'/'} onClick={() => setIsOpen(!isOpen)} className="cart-button">
                  Переглянути каталог товарів
                </Link>
              </div>
            </div>
          </div>
        </div>
        <footer className="cart-modal__footer">
          <div>
            <div className="container">
              <div className="follow">
                <div className="follow-title">Слідкуй за нами у соц.мережах</div>
                <div className="follow-links-wrapper">
                  <span className="icon facebook-icon"></span>
                  <span className="icon instagram-icon"></span>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="copyrights">© Household - Інтернет-магазин.</div>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
};

export default CartModal;
