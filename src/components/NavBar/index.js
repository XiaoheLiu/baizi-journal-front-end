import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="ui brown fixed inverted menu">
      <div className="ui container">
        <div className="header item">
          {" "}
          <Link to="/">百字本</Link>
        </div>
        <Link to="/write" className="item">
          写百字
        </Link>
        <Link to="/read" className="item">
          读百字
        </Link>
        <div className="ui right search item">
          <div className="ui transparent inverted icon input">
            <input type="text" placeholder="搜索..." />
            <i className="search link icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
