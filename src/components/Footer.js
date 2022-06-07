import "./footer.css";
import { ReactComponent as Facebook } from '../images/facebook-f-brands.svg'
import { ReactComponent as Twitter } from '../images/twitter-brands.svg';
import { ReactComponent as Instagram } from '../images/instagram-brands.svg';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__brands">
                <div className="brand brand_round footer__brand">
                    <Facebook className="brand__icon" height="14" width="14" />
                </div>
                <div className="brand brand_round footer__brand">
                    <Twitter className="brand__icon" height="14" width="14" />
                </div>
                <div className="brand brand_round footer__brand">
                    <Instagram className="brand__icon" height="14" width="14" />
                </div>
            </div>
        </footer>
    );
}

export default Footer;
