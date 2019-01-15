import React, { Component } from "react";
import FormErrors from "./FormErrors";
import { createUser } from '../../integration/index';
import { PASSWORD_MIN_LENGTH, USERNAME_MAX_LENGTH } from "../../constants";

class SignUpForm extends Component {
  state = {
    username: "",
    password: "",
    formErrors: { username: "", password: "" },
    usernameValid: false,
    passwordValid: false,
    formValid: false
  };

  onFormSubmit = async (event) => {
    if (event !== undefined && event.preventDefault) event.preventDefault();
    const token = await createUser('username','ppppppp');
    console.log('!!!!!!', token);
  }

  handleUserInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let usernameValid = this.state.usernameValid;
    let passwordValid = this.state.passwordValid;

    switch (fieldName) {
      case "username":
        const regex = new RegExp("^[-w.@]{1," + USERNAME_MAX_LENGTH + "}$/i");
        usernameValid = value.match(regex);
        fieldValidationErrors.username = usernameValid
          ? ""
          : `用户名只能包含英语、数字、“_”、“.”和“@”，且不能超过${USERNAME_MAX_LENGTH}个字符`;
        break;
      case "password":
        passwordValid = value.length >= PASSWORD_MIN_LENGTH;
        fieldValidationErrors.password = passwordValid
          ? ""
          : `密码至少需要${PASSWORD_MIN_LENGTH}位数`;
        break;
      default:
        break;
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        usernameValid: usernameValid,
        passwordValid: passwordValid
      },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({
      formValid: this.state.usernameValid && this.state.passwordValid
    });
  }

  errorClass(error) {
    return error.length === 0 ? "" : "error";
  }

  errorMessageClass(fE) {
    return (fE.username + fE.password).length === 0 ? "hidden" : "";
  }

  render() {
    return (
      <div
        className="ui segment"
        style={{ width: "90%", maxWidth: "500px", margin: "0 auto" }}
      >
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div
            className={`field
                 ${this.errorClass(this.state.formErrors.username)}`}
          >
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
                 ${this.errorClass(this.state.formErrors.password)}`}
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
            disabled={!this.state.formValid}
            type="submit"
          >
            注册
          </button>
        </form>
        <div
          className={`ui negative message ${this.errorMessageClass(
            this.state.formErrors
          )}`}
        >
          <FormErrors formErrors={this.state.formErrors} />
        </div>
      </div>
    );
  }
}

export default SignUpForm;
