import { Component } from "react";
import "./index.css";
import IEpisode from "../../interfaces/IEpisode";

type TItemProps = {
  content: IEpisode;
};

class Item extends Component<TItemProps> {
  render() {
    return (
      <div className="item">
        <h4>{this.props.content.title}</h4>
        <p>{this.props.content.usAirDate}</p>
      </div>
    );
  }
}

export default Item;
