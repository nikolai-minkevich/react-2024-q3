import { Component } from "react";
import IEpisode from "../../interfaces/IEpisode";
import "./index.css";
import Item from "../Item";

type TContentProps = {
  items: IEpisode[] | null;
};

class Content extends Component<TContentProps> {
  render() {
    return (
      <>
        {this.props.items ? (
          this.props.items.length ? (
            <div className="content">
              {this.props.items.map((item) => {
                return <Item content={item} />;
              })}
            </div>
          ) : (
            <p>No items found. Try 'Matter' for example.</p>
          )
        ) : (
          <p>Try to search something.</p>
        )}
      </>
    );
  }
}

export default Content;
