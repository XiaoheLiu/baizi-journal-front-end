import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import InputForm from "./components/InputForm";
import NavBar from "./components/NavBar";
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
            <Route
              path="/"
              exact
              render={() => (
                <div>
                  <InputForm onSubmit={this.onInputFormSubmit} />
                  <BZCards baizis={this.state.baizis} />
                </div>
              )}
            />
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
      </div>
    );
  }
}

export default App;
