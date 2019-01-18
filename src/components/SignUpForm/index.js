import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { withRouter } from 'react-router-dom';
import { createUser } from "../../actions";
import { PASSWORD_MIN_LENGTH, USERNAME_MAX_LENGTH } from "../../constants";

class SignUpForm extends Component {
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

  onSignUpFormSubmit = async values => {
    const { createUser, history } = this.props;
    const token = await createUser(values);
    localStorage.setItem('baiziUserToken', token);
    history.push('/read');
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
          onSubmit={handleSubmit(this.onSignUpFormSubmit)}
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
            注册
          </button>
        </form>
      </div>
    );
  }
}

const validate = values => {
  const errors = {};
  const regex = new RegExp("^[-\\w@\\.]{1," + USERNAME_MAX_LENGTH + "}$");
  if (!values.username) {
    errors.username = "用户名不能为空";
  } else if (!values.username.match(regex)) {
    errors.username = `用户名只能包含英语、数字、“_”、“.”和“@”，且不能超过${USERNAME_MAX_LENGTH}个字符`;
  }
  if (!values.password || values.password.length < 6) {
    errors.password = `密码至少需要${PASSWORD_MIN_LENGTH}位数`;
  }
  return errors;
};

export default withRouter(connect(
  null,
  { createUser }
)(
  reduxForm({
    form: "SignUp",
    validate
  })(SignUpForm)
));
