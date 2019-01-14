import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Introduction from "./components/Introduction";
import InputForm from "./components/InputForm";
import BZCards from "./components/BZCards";
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
    const newBaizi = { content: formatContent(content), date, weather, title };
    const res = await axios.post("/api/baizis", newBaizi);
    this.setState({ baizis: [...this.state.baizis, res.data] });
  }

  render() {
    return (
      <div style={{ marginTop: "4em" }}>
        <BrowserRouter>
          <div>
            <NavBar />
            <Route path="/" exact component={Introduction} />
            <Route
              path="/write"
              render={() => <InputForm onSubmit={this.onInputFormSubmit} />}
            />
            <Route
              path="/read"
              render={() => <BZCards baizis={this.state.baizis} />}
            />
          </div>
        </BrowserRouter>
        <div className="ui inverted brown segment">
          <h5 className="ui center aligned header">
            Copyright 2019 · Athena Liu and Shi Cheng
          </h5>
        </div>
      </div>
    );
  }
}

export default App;
