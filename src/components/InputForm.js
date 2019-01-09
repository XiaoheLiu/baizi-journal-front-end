import React, { Component } from "react";

class InputForm extends Component {
  state = {
    content: "",
    count: 0
  };

  _hanziCounter(str) {
    let hanzi = 0,
      group = 0;
    if (str.match(/[\u4e00-\u9fa5]/g) != null) {
      hanzi = str.match(/[\u4e00-\u9fa5]/g).length;
    }
    return hanzi + group;
  }

  _formatContent(str) {
    return str.match(/[\u4e00-\u9fa5]/g);
  }

  _getToday() {
    Date.prototype.toDateInputValue = function() {
      var local = new Date(this);
      local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
      return local.toJSON().slice(0, 10);
    };
    return new Date().toDateInputValue();
  }

  render() {
    const { content, count } = this.state;
    const formated = this._formatContent(content);

    const today = this._getToday();
    return (
      <form className="ui form">
        <div className="field">
          <label>日期:</label>
          <input type="date" name="date" value={today} />
        </div>
        <div className="field">
          <label>百字:</label>
          <textarea
            value={content}
            onChange={e =>
              this.setState({
                content: e.target.value,
                count: this._hanziCounter(e.target.value)
              })
            }
          />
        </div>
        <p> {count} / 100 字</p>
        <button class="ui button" type="submit">
          Submit
        </button>
        <p>{formated}</p>
      </form>
    );
  }
}

export default InputForm;
