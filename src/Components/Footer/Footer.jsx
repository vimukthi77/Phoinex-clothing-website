  import './Footer.css';
  import logoImage from '../../assets/logo.png';

  const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-brand">
              <img src={logoImage} alt="Logo" className="footer-logo" />
              <span>PHOENIX</span>
            </div>
          
            <div className="footer-links">
              <a href="/about">About</a>
              <a href="/contact">Contact</a>
              <a href="/shipping">Shipping</a>
              <a href="/returns">Returns</a>
            </div>

            <div className="footer-social">
              <a href="https://facebook.com"><i className="fab fa-facebook"></i></a>
              <a href="https://instagram.com"><i className="fab fa-instagram"></i></a>
              <a href="https://twitter.com"><i className="fab fa-twitter"></i></a>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} PHOENIX Clothings. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  };

  export default Footer;