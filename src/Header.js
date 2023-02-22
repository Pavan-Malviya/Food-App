import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [islogedin, setIsLogedIn] = useState(true);

  return (
    <div className="header">
      <img
        src="https://png.pngtree.com/png-vector/20190904/ourmid/pngtree-sea-food-chef-fish-restaurant-mascot-or-character-logo-and-vector-png-image_1723598.jpg"
        className="logo"
      ></img>
      <h1 className="title"></h1>

      <div className="nav-item">
        <ul>
          <li><Link to="/" style={{ textDecoration: 'none', color: 'aqua' }} >Home</Link></li>
          <li><Link to="/About" style={{ textDecoration: 'none', color: 'aqua' }} >About us </Link></li>
          <li><Link to="/Contact" style={{ textDecoration: 'none', color: 'aqua' }} >Contact</Link></li>
          <li>Cart</li>
        </ul>
      </div>
      <div className="btn">
        {islogedin ? (
          <button onClick={() => setIsLogedIn(false)}>Login</button>
        ) : (
          <button onClick={() => setIsLogedIn(true)}>Logout</button>
        )}
      </div>
    </div>
  );
};

export default Header;
