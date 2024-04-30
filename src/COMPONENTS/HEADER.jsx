import { Link } from "react-router-dom/cjs/react-router-dom";
import "../STYLES/HEADER.css";
import { useState } from "react";
// import { useState } from "react";

const Header = () => {
  const [active, setActive] = useState(false)

  const showSearch = (bool) => () => {
    setActive(bool)
  }


  return (
    <header className="head">
      <nav className="navBar">
        <div className="left_menu">
          <div className="logo">Clean Cook-stove</div>
        </div>
        <div className="mainBar">
          <div className="center_menu">
            <Link to="/" className="home hideOnMobile">
              HOME
            </Link>
            <Link to="/product" className="product hideOnMobile">
              PRODUCT
            </Link>
            <Link to="/about" className="about hideOnMobile">
              ABOUT
            </Link>
          </div>
          <div className="right_menu">
            <div className="search">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#f2fdec"
                height="26"
                viewBox="0 -960 960 960"
                width="26"
                onClick={active ? showSearch(false) : showSearch(true)}
              >
                <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
              </svg>
              <div className={`searchInput ${active ? "active" : ''}`}>
                <input type="text" name="find" id="find" />
              </div>
            </div>
            <Link to="/cart" className="cart">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#f2fdec"
                height="26"
                viewBox="0 -960 960 960"
                width="26"
              >
                <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" />
              </svg>
            </Link>
            
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
