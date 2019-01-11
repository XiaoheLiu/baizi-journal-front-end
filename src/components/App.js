import React, { Component } from "react";
import InputForm from "./InputForm";
import { formatContent } from "../helpers/formatBaizi";

class App extends Component {
  onInputFormSubmit = ({ content, date, weather, title }) => {
    console.log(title + date + weather);
    console.log(formatContent(content));
  };

  render() {
    return (
      <div className="ui container">
        <InputForm onSubmit={this.onInputFormSubmit} />
      </div>
    );
  }
}

export default App;
