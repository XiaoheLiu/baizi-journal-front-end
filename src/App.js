import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Introduction from "./components/Introduction";
import InputForm from "./components/InputForm";
import BZCards from "./components/BZCards";
import Footer from "./components/Footer";
import SignInForm from "./components/SignInForm";
import SignUpForm from "./components/SignUpForm";
import { formatContent } from "./utils/formatBaizi";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { baizis: [] };

    this.onInputFormSubmit = this.onInputFormSubmit.bind(this);
  }

  async onInputFormSubmit({ content, date, weather, title }) {
    const newBaizi = { content: formatContent(content), date, weather, title };
    const res = await axios.post("/api/baizis", newBaizi);
    this.setState({ baizis: [...this.state.baizis, res.data] });
  }

  render() {
    return (
      <div style={{ margin: "4em auto" }}>
        <BrowserRouter>
          <div>
            <NavBar />
            <Route path="/" exact component={Introduction} />
            <Route
              path="/write"
              render={() => <InputForm onSubmit={this.onInputFormSubmit} />}
            />
            <Route path="/read" render={() => <BZCards />} />
            <Route path="/signin" component={SignInForm} />
            <Route path="/signup" component={SignUpForm} />
          </div>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}

export default App;
