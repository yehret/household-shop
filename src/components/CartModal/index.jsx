import { Link } from 'react-router-dom';
import Footer from '../Footer';
import './styles.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const CartModal = ({ setIsOpen, isOpen }) => {
  const { orderStack } = useSelector((state) => state.cart);
  const { currentUser } = useSelector((state) => state.user);
  const [clientName, setClientName] = useState(currentUser?.name || '');
  const [clientLastname, setClientLastname] = useState(currentUser?.surname || '');
  const [clientMiddlename, setClientMiddlename] = useState(currentUser?.middlename || '');
  const [clientNumber, setClientNumber] = useState(currentUser?.phoneNumber || '');

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
          {orderStack.length > 0 ? (
            <>
              <div className="form-wrapper"></div>
              <div className="cart-wrapper">
                <div className="cart-data">
                  <div className="formCart-list">
                    <h2>Дані замовлення</h2>
                    <form>
                      <div className="double-form">
                        <div className="formCart-list__item">
                          <label htmlFor="Lastname">Прізвище</label>
                          <input
                            value={clientLastname}
                            onChange={(e) => setClientLastname(e.target.value)}
                            type="text"
                            name="Lastname"
                          />
                        </div>
                        <div className="formCart-list__item">
                          <label htmlFor="Phone">Номер телефону</label>
                          <input
                            value={clientNumber}
                            onChange={(e) => setClientNumber(e.target.value)}
                            type="phone"
                            name="Phone"
                          />
                        </div>
                      </div>
                      <div className="formCart-list__item">
                        <label htmlFor="Name">{"Ім'я"}</label>
                        <input
                          value={clientName}
                          onChange={(e) => setClientName(e.target.value)}
                          type="text"
                          name="Name"
                        />
                      </div>
                      <div className="formCart-list__item">
                        <label htmlFor="Middlename">По-батькові</label>
                        <input
                          value={clientMiddlename}
                          onChange={(e) => setClientMiddlename(e.target.value)}
                          type="text"
                          name="Middlename"
                        />
                      </div>
                    </form>
                  </div>
                  <div className="cart-list">
                    <h2>Ваш кошик ({orderStack.length})</h2>
                    <div>
                      <div className="itemList arrowborder">
                        {orderStack.map((cartItem, index) => (
                          <CartItem key={index} itemData={cartItem} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cartlist-details">
                  <div className="cartlist-block">
                    <div className="cartlist-details_summary">Сума замовлення</div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <EmptyCart setIsOpen={setIsOpen} isOpen={isOpen} />
          )}
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
