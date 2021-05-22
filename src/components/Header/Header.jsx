import { useState } from "react";
import {
  Menu,
  Search,
  VideoCall,
  Apps,
  Notifications,
} from "@material-ui/icons";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";

import "./Header.css";

const Header = () => {
  const [searchText, setSearchText] = useState("");
  return (
    <div className="header">
      <div className="header__left">
        <Menu />
        <Link to="/" style={{textDecoration: "none"}}>
          <h2 className="header__logo">
            <span className="header__stream">S𝚝ᵣₑₐᗰ </span>Tᵤ𝚋ₑ
          </h2>
        </Link>
      </div>

      <div className="header__input">
        <input
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <Link to={`/search/${searchText}`} style={{textDecoration: "none"}}>
          <Search className="header__search" />
        </Link>
      </div>

      <div className="header__icons">
        <VideoCall className="header__icon" />
        <Apps className="header__icon" />
        <Notifications className="header__icon" />
        <Avatar />
      </div>
    </div>
  );
};

export default Header;
