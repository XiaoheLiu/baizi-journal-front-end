import React, { Component } from "react";

import { PASSWORD_MIN_LENGTH } from "../../constants";

class SignInForm extends Component {
  state = {
    username: "",
    password: ""
  };

  handleUserInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  }

  formDisabled(state) {
    return (
      state.username.length === 0 || state.password.length < PASSWORD_MIN_LENGTH
    );
  }

  render() {
    return (
      <div
        className="ui segment"
        style={{ width: "90%", maxWidth: "500px", margin: "0 auto" }}
      >
        <form className="ui form">
          <div className={`field`}>
            <label>用户名</label>
            <input
              type="text"
              name="username"
              placeholder="用户名"
              value={this.state.username}
              onChange={e => this.handleUserInput(e)}
            />
          </div>
          <div
            className={`field
                 `}
          >
            <label>密码</label>
            <input
              type="password"
              name="password"
              placeholder="密码"
              value={this.state.password}
              onChange={e => this.handleUserInput(e)}
            />
          </div>
          <button
            className="ui button"
            type="submit"
            disabled={this.formDisabled(this.state)}
          >
            登入
          </button>
        </form>
      </div>
    );
  }
}

export default SignInForm;
