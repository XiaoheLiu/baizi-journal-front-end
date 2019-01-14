import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <div className="ui brown fixed inverted menu">
        <div className="ui container">
          <div className="header item">
            {" "}
            <a href="#top">百字本</a>
          </div>
          <a href="#top" className="item">
            写百字
          </a>
          <a href="#top" className="item">
            读百字
          </a>
          <div className="ui right search item">
            <div className="ui transparent inverted icon input">
              <input type="text" placeholder="搜索..." />
              <i className="search link icon" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
