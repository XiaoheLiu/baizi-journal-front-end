import React from "react";
import "./BaiziDisplay.css";
import { formatDate, formatHtml } from "../helpers/formatBaizi";

const BaiziDisplay = ({ date, text, weather, title }) => {
  return (
    <div className="baiziDisplay">
      <div className="ui huge message">
        <h2 className="ui left floated header  baiziTitle">{title}</h2>
        <h2 className="ui right aligned header">{`${formatDate(
          date
        )} ${weather}`}</h2>

        <p>{formatHtml(text)}</p>
      </div>
    </div>
  );
};

export default BaiziDisplay;
