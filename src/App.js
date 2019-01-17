import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import { createBaizi } from "./actions";
import NavBar from "./components/NavBar";
import Landing from "./components/Landing";
import BaiziInput from "./components/BaiziInput";
import BaiziList from "./components/BaiziList";
import Footer from "./components/Footer";
import SignInForm from "./components/SignInForm";
import SignUpForm from "./components/SignUpForm";
import { formatContent } from "./utils/formatBaizi";

class App extends Component {
  onBaiziInputSubmit = newBaizi => {
    const content = formatContent(newBaizi.content);
    this.props.createBaizi({ ...newBaizi, content });
  };

  render() {
    return (
      <div style={{ margin: "4em auto" }}>
        <BrowserRouter>
          <div>
            <NavBar />
            <Route path="/" exact component={Landing} />
            <Route
              path="/write"
              render={() => <BaiziInput onSubmit={this.onBaiziInputSubmit} />}
            />
            <Route path="/read" component={BaiziList} />
            <Route path="/signin" component={SignInForm} />
            <Route path="/signup" component={SignUpForm} />
          </div>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}

export default connect(
  null,
  { createBaizi }
)(App);
