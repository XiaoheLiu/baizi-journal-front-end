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
import axios from "axios";

class App extends Component {
  // === Not Working ===
  onBaiziInputSubmit = newBaizi => {
    const content = formatContent(newBaizi.content);
    // const baizi = { ...newBaizi, content };
    const baizi = {
      content: "喵喵喵",
      title: "test",
      date: "2018-09-18",
      weather: ""
    };
    console.log(baizi);
    this.props.createBaizi(baizi);
  };

  // === Working ===
  // async onBaiziInputSubmit({ content, date, weather, title }) {
  //   const newBaizi = { content: formatContent(content), date, weather, title };
  //   const res = await axios.post("/api/baizis", newBaizi);
  //   // this.setState({ baizis: [...this.state.baizis, res.data] });
  // }

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
