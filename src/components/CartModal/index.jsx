import { Link } from 'react-router-dom';
import Footer from '../Footer';
import './styles.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';

const CartModal = ({ setIsOpen, isOpen }) => {
  const { orderStack } = useSelector((state) => state.cart);
  console.log(orderStack);

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
          <div className="cart-wrapper">
            <div className="cart-list">
              <h2>Ваш кошик (n)</h2>
              <div>
                <div className="itemList arrowborder">
                  {orderStack.map((cartItem, index) => (
                    <CartItem key={index} itemData={cartItem} />
                  ))}
                </div>
              </div>
            </div>
            <div className="cartlist-details">
              <div className="cartlist-block">
                <div className="cartlist-details_summary">Сума замовлення</div>
              </div>
            </div>
          </div>
          <EmptyCart setIsOpen={setIsOpen} isOpen={isOpen} />
        </div>
        <Footer />
      </section>
    </>
  );
};

const EmptyCart = ({ setIsOpen, isOpen }) => {
  return (
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
  );
};

export default CartModal;
