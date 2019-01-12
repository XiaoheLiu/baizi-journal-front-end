import React from "react";
import "./BaiziDisplay.css";
import { formatDate, formatHtml } from "../helpers/formatBaizi";

const BaiziDisplay = ({ date, text, weather, title }) => {
  return (
    <div className="baiziDisplay">
      <div className="ui huge message baiziCard">
        <h3 className="ui right aligned header">{`${formatDate(
          date
        )} ${weather}`}</h3>
        <h2 className="ui left aligned header">{title}</h2>
        <p>{formatHtml(text)}</p>
      </div>
    </div>
  );
};

export default BaiziDisplay;
