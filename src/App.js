import React, { Component } from "react";
import InputForm from "./components/InputForm";
import NavBar from "./components/NavBar";
import BZDisplay from "./components/BZDisplay";
import { formatContent } from "./utils/formatBaizi";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { baizis: [] };

    this.onInputFormSubmit = this.onInputFormSubmit.bind(this);
  }

  componentWillMount() {
    this.loadBaizis();
  }

  async loadBaizis() {
    const response = await axios.get("/api/baizis");
    this.setState({ baizis: response.data });
  }

  async onInputFormSubmit({ content, date, weather, title }) {
    // Write a new function instead of formatContent, and save the content in a JSX form, wrapping each char in span, and differentiate chars and punctuations
    // Then change <BaiziDisplay> to make a grid baizi possible.
    const newBaizi = { content: formatContent(content), date, weather, title };
    const res = await axios.post("/api/baizis", newBaizi);
    this.setState({ baizis: [...this.state.baizis, res.data] });
  }

  render() {
    const baiziCards = this.state.baizis
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
