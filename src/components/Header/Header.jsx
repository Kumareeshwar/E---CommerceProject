import React from 'react';
import { Search, ShoppingBasket } from '@mui/icons-material';
import './Header.css';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider/StateProvider';


const Header = () => {
  const [{basket}] = useStateValue();
  return (
    <nav className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          alt="logo"
        />
      </Link>
      <div className="header__search">
        <input
          className="header__searchInput"
          placeholder="Search..."
        />
        <Search className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Hello</span>
            <span className="header__optionLineTwo">Sign in</span>
          </div>
        </Link>
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Return</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>
        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
            <ShoppingBasket />
            <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
