import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchBaizis } from "../../actions";
import BZDisplay from "../BZDisplay";

class BZCards extends Component {
  componentDidMount() {
    this.props.fetchBaizis();
  }

  renderCards() {
    return this.props.baizis
      .slice(0)
      .reverse()
      .map(b => (
        <BZDisplay
          content={b.content}
          date={b.date}
          weather={b.weather}
          title={b.title}
          key={b._id}
        />
      ));
  }

  render() {
    return (
      <div style={{ maxWidth: "62em", width: "90%", margin: "10px auto" }}>
        <h4 className="ui horizontal divider header" id="dubaizi">
          <i className="newspaper outline icon" />
        </h4>
        {this.renderCards()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { baizis: state.baizis };
};

export default connect(
  mapStateToProps,
  { fetchBaizis }
)(BZCards);
