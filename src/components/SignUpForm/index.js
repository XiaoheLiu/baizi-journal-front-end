import React, { Component } from "react";

class SignUpForm extends Component {
  render() {
    return (
      <div
        className="ui segment"
        style={{ width: "90%", maxWidth: "500px", margin: "0 auto" }}
      >
        <form className="ui form">
          <div className="field">
            <label>用户名</label>
            <input type="text" name="first-name" placeholder="用户名" />
          </div>
          <div className="field">
            <label>密码</label>
            <input type="password" name="first-name" placeholder="密码" />
          </div>
          <button class="ui button" type="submit">
            注册
          </button>
        </form>
      </div>
    );
  }
}

export default SignUpForm;
