import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Landing from "./components/Landing";
import BaiziCreate from "./components/BaiziCreate";
import BaiziList from "./components/BaiziList";
import Footer from "./components/Footer";
import SignInForm from "./components/SignInForm";
import SignUpForm from "./components/SignUpForm";

class App extends Component {
  render() {
    return (
      <div style={{ margin: "4em auto" }}>
        <BrowserRouter>
          <div>
            <NavBar />
            <Route path="/" exact component={Landing} />
            <Route path="/write" exact component={BaiziCreate} />
            <Route path="/read" exact component={BaiziList} />
            <Route path="/signin" exact component={SignInForm} />
            <Route path="/signup" exact component={SignUpForm} />
          </div>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}

export default App;
