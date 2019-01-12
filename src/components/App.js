import React, { Component } from "react";
import InputForm from "./InputForm";
import NavBar from "./NavBar";
import BaiziDisplay from "./BaiziDisplay";
import { formatContent } from "../helpers/formatBaizi";

class App extends Component {
  state = { baizis: [] };

  onInputFormSubmit = ({ content, date, weather, title }) => {
    console.log(title + date + weather);
    console.log(formatContent(content));
    const newBaizi = { content: formatContent(content), date, weather, title };
    this.setState({ baizis: [...this.state.baizis, newBaizi] });
  };

  render() {
    const baiziCards = this.state.baizis.map((b, i) => (
      <BaiziDisplay
        text={b.content}
        date={b.date}
        weather={b.weather}
        title={b.title}
        key={i}
      />
    ));
    return (
      <div style={{ marginTop: "4em" }}>
        <NavBar />
        <h4 className="ui horizontal divider header" id="xiebaizi">
          <i className="edit outline icon" />
        </h4>
        <InputForm onSubmit={this.onInputFormSubmit} />
        <h4 className="ui horizontal divider header" id="dubaizi">
          <i className="newspaper outline icon" />
        </h4>
        {baiziCards}
      </div>
    );
  }
}

export default App;
