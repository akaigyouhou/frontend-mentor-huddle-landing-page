import "./header.css";
import Logo from "../images/logo.svg";

function Header() {
    return (
        <header className="header">
            <img className="logo header__logo" src={Logo} alt="logo"></img>
        </header>
    );
}

export default Header;
