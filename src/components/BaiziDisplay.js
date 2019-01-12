import React from "react";
import { formatDate } from "../helpers/formatBaizi";

const BaiziDisplay = ({ date, text, weather, title }) => {
  return (
    <div style={{ maxWidth: "57em", margin: "15px auto" }}>
      <div className="ui container">
        <div className="ui massive message">
          <h3 className="ui right aligned header">{`${formatDate(
            date
          )} ${weather}`}</h3>
          <h2 className="ui left aligned header">{title}</h2>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default BaiziDisplay;
