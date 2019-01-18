import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { authUser } from "../../actions";

class SignInForm extends Component {
  renderField = ({ input, label, type, meta: { touched, error } }) => {
    const className = `field ${error && touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} placeholder={label} type={type} />
        {touched && error && (
          <p style={{ color: "maroon", marginTop: "5px" }}>{error}</p>
        )}
      </div>
    );
  };

  onSignInFormSubmit = values => {
    this.props.authUser(values);
  };

  render() {
    const { handleSubmit, submitting, invalid } = this.props;

    return (
      <div
        className="ui segment"
        style={{ width: "90%", maxWidth: "500px", margin: "0 auto" }}
      >
        <form
          className="ui form"
          onSubmit={handleSubmit(this.onSignInFormSubmit)}
        >
          <Field
            name="username"
            label="用户名"
            component={this.renderField}
            type="text"
          />
          <Field
            name="password"
            label="密码"
            component={this.renderField}
            type="password"
          />
          <button
            className="ui button"
            type="submit"
            disabled={submitting | invalid}
          >
            登入
          </button>
        </form>
      </div>
    );
  }
}

const validate = values => {
  const errors = {};
  if (!values.username) {
    errors.username = "用户名不能为空";
  }
  if (!values.password) {
    errors.password = "密码不能为空";
  }
  return errors;
};

export default connect(
  null,
  { authUser }
)(
  reduxForm({
    form: "SignIn",
    validate
  })(SignInForm)
);
