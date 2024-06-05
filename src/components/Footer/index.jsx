import { Link } from 'react-router-dom';
import './styles.css';

const Footer = () => {
  return (
    <footer>
      <div>
        <div className="container">
          <div className="follow">
            <div className="follow-title">Слідкуй за нами у соціальних мережах</div>
            <div className="follow-links-wrapper">
              <Link
                to={'https://www.facebook.com/Babynewvol'}
                target="blank"
                className="icon facebook-icon"></Link>
              <Link
                to={'https://www.instagram.com/babynewvol?utm_source=qr&igsh=NXY5MDd2Nnh4YXdo'}
                target="blank"
                className="icon instagram-icon"></Link>
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
