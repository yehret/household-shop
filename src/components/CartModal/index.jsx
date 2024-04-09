import './styles.css';

const CartModal = () => {
  return (
    <>
      <section className="cart-modal__full-screen">
        <div>
          <div>
            <div className="cart-modal__header">Лого</div>
            <div className="cart-modal__back-button">
              <i className="icon icon-return"></i>
              <span>Повернутись назад</span>
            </div>
          </div>
          <div className="cart-modal__wrapper">
            <div className="cart-modal__product-list">
              <div className="cart-modal__empty-cart">
                <p>Ваш кошик порожній.</p>
                <p>Ніколи не пізно це виправити :)</p>
                <button to={'/'} className="cart-button">
                  Переглянути каталог товарів
                </button>
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
