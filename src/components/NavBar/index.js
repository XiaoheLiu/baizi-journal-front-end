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
          <i className="edit outline icon" />写
        </Link>
        <Link to="/read" className="item">
          <i className="newspaper outline icon" />读
        </Link>
        <Link to="/search" className="item">
          <i className="search icon" />搜
        </Link>
        <div className="right inverted brown menu">
          <Link to="/signin" className="item">
            <i className="sign in alternate icon" />
            登入
          </Link>
          <Link to="/signup" className="item">
            <strong>注册</strong>
          </Link>
          <a className="item">
            <i className="sign out alternate icon" /> 登出
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
