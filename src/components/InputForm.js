import React, { Component } from "react";
import BaiziDisplay from "./BaiziDisplay";

class InputForm extends Component {
  state = {
    content: "",
    date: "",
    title: "",
    weather: ""
  };

  componentDidMount() {
    this.setState({ date: this._getToday() });
  }

  onDateChange = e => {
    this.setState({ date: e.target.value });
  };

  onTextareaChange = e => {
    this.setState({ content: e.target.value });
  };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({
      content: "",
      date: this._getToday(),
      title: "",
      weather: ""
    });
  };

  _hanziCounter(str) {
    let count = 0;
    const chRegex = /[\u4e00-\u9fa5]/g,
      groupRegex = /\[([^\]]+)\]/g;
    if (str.match(chRegex) != null) {
      count = str.match(chRegex).length;
    }
    if (str.match(groupRegex) != null) {
      count += str.match(groupRegex).length;
    }
    return count;
  }

  _getToday() {
    const local = new Date();
    local.setMinutes(local.getMinutes() - local.getTimezoneOffset());
    return local.toJSON().slice(0, 10);
  }

  render() {
    const { content, date, title, weather } = this.state;
    const count = this._hanziCounter(content);
    const buttonColor = count === 100 ? "green" : "";
    const buttonState = count === 100 ? false : true;

    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="three fields">
            <div className="field">
              <label>题目:</label>
              <input
                type="text"
                name="title"
                value={title}
                autoComplete="off"
                onChange={e => this.setState({ title: e.target.value })}
              />
            </div>
            <div className="field">
              <label>天气:</label>
              <select
                className="ui fluid dropdown"
                onChange={e => this.setState({ weather: e.target.value })}
              >
                <option value="">--optional--</option>
                <option value="☀️">☀️</option>
                <option value="⛅️">⛅️</option>
                <option value="🌦">🌦</option>
                <option value="☁️">☁️</option>
                <option value="🌧">🌧</option>
                <option value="⛈">⛈</option>
                <option value="❄️">❄️</option>
                <option value="🌫">🌫</option>
              </select>
            </div>
            <div className="field">
              <label>日期:</label>
              <input
                type="date"
                name="date"
                value={date}
                onChange={this.onDateChange}
              />
            </div>
          </div>
          <div className="field">
            <label>百字:</label>
            <textarea value={content} onChange={this.onTextareaChange} />
          </div>
          <p> {count} / 100 字</p>
          <button
            className={`ui ${buttonColor} button`}
            disabled={buttonState}
            type="submit"
          >
            Submit
          </button>
        </form>
        <BaiziDisplay
          text={content}
          date={date}
          weather={weather}
          title={title}
        />
      </div>
    );
  }
}

export default InputForm;
