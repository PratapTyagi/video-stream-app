import {
  Menu,
  Search,
  VideoCall,
  Apps,
  Notifications,
} from "@material-ui/icons";
import { Avatar } from "@material-ui/core";

import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <Menu />
        <h2>
          <span className="header__stream">S𝚝ᵣₑₐᗰ </span>Tᵤ𝚋ₑ
        </h2>
      </div>

      <div className="header__input">
        <input type="text" placeholder="Search" />
        <Search className="header__search" />
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
