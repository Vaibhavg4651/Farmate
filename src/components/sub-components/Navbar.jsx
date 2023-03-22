import React, {useRef} from "react";
import "../../styles/nav.css";
import Button from '@mui/material/Button';

const Navbar = () => {
  const footerRef = useRef(null);

  const handleContactClick = () => {
    footerRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="Nav">
      <div className="">
        <div>Farmate</div>
      </div>
      <div className="navbar">
        <ul className="nav">
          <li className="na">
            <a className="home" href="/">
              Home
            </a>
          </li>
          <li className="na">
            <a className="about" href="/about">
              About
            </a>
          </li>
          <li className="na">
            <a className="involve" href="/register">
              Get Involved
            </a>
          </li>
          <li className="na">
            <a className="help" href="/help">
              How we Help
            </a>
          </li>
        </ul>
      </div>
      <div className="navbar1">
        <Button variant="contained" href="">Donate</Button>
        </div>
        <div className="navbar1">
        <Button variant="contained" href="/login">Login</Button>
        </div>
    </div>
  );
};

export default Navbar;
