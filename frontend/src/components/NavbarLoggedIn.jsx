import { ReactComponent as Flowerlogo } from "../Assets/flowerLogo.svg";
import { ReactComponent as Logotextseperator } from "../Assets/logoSeperator.svg";
import { ReactComponent as Hamburgermenu } from "../Assets/hamburgerMenu.svg";
import { Link } from "react-router-dom";
import "./navbarLoggedIn.css";
import { useSelector } from "react-redux";
import { FaAngleDown } from "react-icons/fa"
import { useState } from "react"
import { useDispatch } from "react-redux";
import { logout } from "../features/authSlice";


export default function NavbarLoggedIn() {
  
  const { user } = useSelector((state) => state.auth);
  
  const [isHidden, setIsHidden] = useState(true)
  if (isHidden === true) {

  }
  else {

  }

  const handleClick = (e) => {
    console.log('clicked')
    setIsHidden(current => !current)
    console.log(isHidden)
  }

  const dispatch = useDispatch();

  const handleLogout = (e) => {
    console.log('logout')
    dispatch(logout());
  }

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
          <p className="user" onClick={handleClick}>
              {user.name}
              <FaAngleDown />
          </p>
          <p className={isHidden ? "logoutHidden" : "logoutShow"}
             onClick={handleLogout}>Logout
          </p>
        </div>
      </div>
      <Hamburgermenu className="hamburgerMenu" />
    </div>
  );
}
