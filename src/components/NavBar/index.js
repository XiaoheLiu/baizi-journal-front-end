import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { logoutUser, getUser } from "../../actions";

class NavBar extends Component {
  componentDidMount = async () => {
    const { isSignedIn, getUser } = this.props;
    if (isSignedIn) {
      console.log("signed in!");
      const info = await getUser();
      console.log("info:" + info);
    }
  };

  logout = () => {
    const { logoutUser, history } = this.props;
    localStorage.setItem("baiziUserToken", "");
    logoutUser();
    history.push("/");
  };

  render() {
    const { isSignedIn } = this.props;
    return (
      <div className="ui brown fixed inverted menu">
        <div className="ui container">
          <div className="header item">
            <Link to="/">百字本</Link>
          </div>
          {isSignedIn && (
            <Link to="/write" className="item">
              <i className="edit outline icon" />写
            </Link>
          )}
          {isSignedIn && (
            <Link to="/read" className="item">
              <i className="newspaper outline icon" />读
            </Link>
          )}
          {isSignedIn && (
            <Link to="/search" className="item">
              <i className="search icon" />搜
            </Link>
          )}

          <div className="right inverted brown menu">
            {!isSignedIn && (
              <Link to="/signin" className="item">
                <i className="sign in alternate icon" />
                登入
              </Link>
            )}
            {!isSignedIn && (
              <Link to="/signup" className="item">
                <strong>注册</strong>
              </Link>
            )}
            {isSignedIn && (
              <a className="item">
                <i className="user circle icon" /> 用户
              </a>
            )}
            {isSignedIn && (
              <a className="item" onClick={this.logout}>
                <i className="sign out alternate icon" /> 登出
              </a>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isSignedIn: state.user.length > 0 || localStorage.getItem("baiziUserToken")
});

export default withRouter(
  connect(
    mapStateToProps,
    { logoutUser, getUser }
  )(NavBar)
);
