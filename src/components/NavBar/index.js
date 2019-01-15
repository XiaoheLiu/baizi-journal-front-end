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
        <div className="right inverted brown menu">
          <a className="item">
            <i className="sign in alternate icon" />
          </a>
          <Link to="/signup" className="item">
            <strong>注册</strong>
          </Link>
          <a className="item">
            <i className="sign out alternate icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
