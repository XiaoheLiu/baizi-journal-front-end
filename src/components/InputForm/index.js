import React, { Component } from "react";
import BZDisplay from "../BZDisplay";
import InfoMessage from "../InfoMessage";
import { getToday } from "../../utils/date";
import { hanziCounter } from "../../utils/formatBaizi";

import { SINGLE_BAIZI_CHARACTER_LIMIT } from "../../constants";

class InputForm extends Component {
  state = {
    content: "",
    date: "",
    title: "",
    weather: "",
    showInfoMessage: true
  };

  componentDidMount() {
    this.setState({ date: getToday() });
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
      date: getToday(),
      title: "",
      weather: ""
    });
  };

  onCloseInfoMessage = () => {
    this.setState({ showInfoMessage: false });
  };

  render() {
    const { content, date, title, weather, showInfoMessage } = this.state;
    const count = hanziCounter(content);
    const button =
      count === SINGLE_BAIZI_CHARACTER_LIMIT
        ? { color: "green", disabled: false, text: "发布" }
        : { color: "", disabled: true, text: "未完成" };

    return (
      <div style={{ maxWidth: "62em", width: "90%", margin: "0 auto" }}>
        <h4 className="ui horizontal divider header" id="xiebaizi">
          <i className="edit outline icon" />
        </h4>
        {showInfoMessage && <InfoMessage onClose={this.onCloseInfoMessage} />}
        <div className="ui centered segment">
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
                <label>日期:</label>
                <input
                  type="date"
                  name="date"
                  value={date}
                  onChange={this.onDateChange}
                />
              </div>
              <div className="field">
                <label>天气:</label>
                <select
                  className="ui fluid dropdown"
                  onChange={e => this.setState({ weather: e.target.value })}
                  value={weather}
                >
                  <option value="">--（选填）--</option>
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
            </div>
            <div className="field">
              <label>百字:</label>
              <textarea value={content} onChange={this.onTextareaChange} />
            </div>
            <p> {count} / 100 字</p>
            <button
              className={`ui ${button.color} button`}
              disabled={button.disabled}
              type="submit"
            >
              {button.text}
            </button>
          </form>
          <div className="ui horizontal divider">预览</div>
          <BZDisplay
            text={content}
            date={date}
            weather={weather}
            title={title}
            key={1}
          />
        </div>
      </div>
    );
  }
}

export default InputForm;
