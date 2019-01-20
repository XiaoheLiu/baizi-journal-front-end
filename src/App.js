import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import TokenRequiredRoute from './components/TokenRequiredRoutes';
import RedirectIfLoggedIn from './components/RedirectIfLoggedIn';
import NavBar from "./components/NavBar";
import Landing from "./components/Landing";
import BaiziCreate from "./components/BaiziCreate";
import BaiziList from "./components/BaiziList";
import Footer from "./components/Footer";
import SignInForm from "./components/SignInForm";
import SignUpForm from "./components/SignUpForm";
import PageNotFound from "./components/PageNotFound";

class App extends Component {
  render() {
    return (
      <div style={{ margin: "4em auto" }}>
        <BrowserRouter>
          <div>
            <NavBar />
            <Switch>
              <RedirectIfLoggedIn path="/" exact component={Landing} />
              <TokenRequiredRoute path="/write" exact component={BaiziCreate} />
              <TokenRequiredRoute path="/read" exact component={BaiziList} />
              <Route path="/signin" exact component={SignInForm} />
              <Route path="/signup" exact component={SignUpForm} />
              <Route component={PageNotFound} />
          </Switch>
          </div>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}

export default App;
