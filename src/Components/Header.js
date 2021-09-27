import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

const Header = () => {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="header">
      <div></div>
      <Link to="/">
        <img
          className="header_Logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon-logo"
        />
      </Link>
      <div className="header_Search">
        <input type="text" />
        <SearchIcon className="header_SearchIcon" />
      </div>
      <div className="header_Right">
        <Link to="/login">
          <div className="header_RightItem">
            <span className="header_RightItemFirstLine">Hello guest</span>
            <span className="header_RightItemTwoLine">Sign in</span>
          </div>
        </Link>
        <div className="header_RightItem">
          <span className="header_RightItemFirstLine">Order &</span>
          <span className="header_RightItemTwoLine">Return</span>
        </div>
        <div className="header_RightItem">
          <span className="header_RightItemFirstLine">Try</span>
          <span className="header_RightItemTwoLine">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header_RightItem">
            <span className="header_RightItemFirstLine">{basket?.length}</span>
            <ShoppingCartIcon />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
