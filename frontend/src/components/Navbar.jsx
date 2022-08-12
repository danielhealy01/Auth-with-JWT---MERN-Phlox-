import { ReactComponent as Flowerlogo } from "../Assets/flowerLogo.svg";
import { ReactComponent as Logotextseperator } from "../Assets/logoSeperator.svg";
import { ReactComponent as Hamburgermenu } from "../Assets/hamburgerMenu.svg";
import { Link } from 'react-router-dom'
import './navbar.css'

export default function Navbar() {
    return (
      <div className="navContainer">
        <div className="logoContainerExt">
          <Link to="/">
            <div className="logoContainerInt">
              <Flowerlogo className="logoImg" />
              <p className="logoText1">PHLOX</p>
              <Logotextseperator className="logoTextSeperator" />
              <p className="logoText2">Agency</p>
            </div>
          </Link>
        </div>
        <div className="linkSectionExt">
          <div className="linkSectionInt">
            <p className="linkItemActive">Home</p>
            <p className="linkItem">Portfolio</p>
            <p className="linkItem">Blog</p>
            <p className="linkItem">About</p>
            <p className="linkItem">Contact</p>
          </div>
        </div>
        <div className="buttonContainerExt">
          <div className="buttonContainerInt">
            <Link to="/login">
              <p className="loginButton">Login</p>
            </Link>
            <Link to="/register">
              <p className="signUpButton">Sign Up</p>
            </Link>
          </div>
        </div>
        <Hamburgermenu className="hamburgerMenu" />
      </div>
    );
}
