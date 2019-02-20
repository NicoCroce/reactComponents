import React, { Component } from 'react';

class InputCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.initialValue
    }
    this.sendValue = props.value;
  }

  _onTodoChange(value) {
    this.setState({ value });
    this.sendValue(value);
  }

  render() {
    const { type } = this.props;

    return (
      <input
        type={ type }
        value={this.state.value}
        onChange={e => this._onTodoChange(e.target.value)}
      />
    )
  }
}

export default InputCard;