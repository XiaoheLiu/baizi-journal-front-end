import React from "react";
import { formatContent } from "../helpers/formatBaizi";

function formatDate(d) {
  const month = d.slice(5, 7).replace(/^0/, "");
  const day = d.slice(8).replace(/^0/, "");
  return `${d.slice(0, 4)}年 ${month}月 ${day}日`;
}

const BaiziDisplay = ({ date, text, weather, title }) => {
  return (
    <div style={{ maxWidth: "57em", margin: "15px auto" }}>
      <div className="ui container">
        <div className="ui massive message">
          <h3 className="ui right aligned header">{`${formatDate(
            date
          )} ${weather}`}</h3>
          <h2 className="ui left aligned header">{title}</h2>
          <p>{formatContent(text)}</p>
        </div>
      </div>
    </div>
  );
};

export default BaiziDisplay;