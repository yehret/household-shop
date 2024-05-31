import './styles.css';

const Footer = () => {
  return (
    <footer>
      <div>
        <div className="container">
          <div className="follow">
            <div className="follow-title">Слідкуй за нами у соціальних мережах</div>
            <div className="follow-links-wrapper">
              <span className="icon facebook-icon"></span>
              <span className="icon instagram-icon"></span>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyrights">© NovikHim — Інтернет-магазин</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
