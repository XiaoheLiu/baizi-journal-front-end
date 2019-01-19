import React, { Component } from "react";
import { connect } from "react-redux";
import { createBaizi } from "../../actions";
import BaiziInput from "../BaiziInput";
import { formatContent } from "../../utils/formatBaizi";

class BaiziCreate extends Component {
  onBaiziInputSubmit = newBaizi => {
    const content = formatContent(newBaizi.content);
    this.props.createBaizi({ ...newBaizi, content });
  };

  render() {
    return <BaiziInput onSubmit={this.onBaiziInputSubmit} />;
  }
}

export default connect(
  null,
  { createBaizi }
)(BaiziCreate);
