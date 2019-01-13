import React, { Component } from "react";
import BaiziDisplay from "./BaiziDisplay";
import InfoMessage from "./InfoMessage";

class InputForm extends Component {
  state = {
    content: "",
    date: "",
    title: "",
    weather: "",
    showInfoMessage: true
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

  onCloseInfoMessage = () => {
    this.setState({ showInfoMessage: false });
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
    const button =
      count === 100
        ? { color: "green", disabled: false, text: "发布" }
        : { color: "", disabled: true, text: "未完成" };

    return (
      <div
        className="ui centered segment"
        style={{ maxWidth: "62em", margin: "0 auto" }}
      >
        {this.state.showInfoMessage ? (
          <InfoMessage onClose={this.onCloseInfoMessage} />
        ) : null}

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
        <BaiziDisplay
          text={content}
          date={date}
          weather={weather}
          title={title}
          key={1}
        />
      </div>
    );
  }
}

export default InputForm;
