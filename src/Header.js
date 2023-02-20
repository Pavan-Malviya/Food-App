import { useState } from "react";

const Header = () => {
  const [islogedin, setIsLogedIn] = useState(true);

  return (
    <div className="header">
      <img
        src="https://cdn-images-1.medium.com/max/1200/1*v5SYqjYEdQMPIwNduRrnCw.png"
        className="logo"
      ></img>
      <h1 className="title"></h1>

      <div className="nav-item">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
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
