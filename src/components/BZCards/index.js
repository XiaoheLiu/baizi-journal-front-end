import React, { Component } from "react";
import BZDisplay from "../BZDisplay";

class BZCards extends Component {
  render() {
    const baiziCards = this.props.baizis
      .slice(0)
      .reverse()
      .map((b, i) => (
        <BZDisplay
          text={b.content}
          date={b.date}
          weather={b.weather}
          title={b.title}
          key={b._id}
        />
      ));

    return (
      <div style={{ maxWidth: "62em", margin: "10px auto" }}>
        <h4 className="ui horizontal divider header" id="dubaizi">
          <i className="newspaper outline icon" />
        </h4>
        {baiziCards}
      </div>
    );
  }
}

export default BZCards;
