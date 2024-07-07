import { Component } from "react";
import './index.css';

type TThrowErrorButtonState = {
  counter: number;
}

class ThrowErrorButton extends Component<Record<string, null>, TThrowErrorButtonState> {

  state: TThrowErrorButtonState = {
    counter: 0,
  }

  handleClick = () => {
    this.setState({
      counter: 1,
    })
  }

  render() {
    if (this.state.counter === 1) {
      // Simulate a JS error
      throw new Error('Dummy error');
    }

    return (
      <div className="throw-error-button">
        <button onClick={this.handleClick}>Throw an error!</button>
      </div>
    )
  }

}

export default ThrowErrorButton;
