import { Component } from "react";
import IEpisode from "../../interfaces/IEpisode";
import "./index.css";
import Item from "../Item";

type TContentProps = {
  items: IEpisode[] | undefined | null;
};

class Content extends Component<TContentProps> {
  render() {
    return (
      <>
        {this.props.items ? (
          this.props.items.length ? (
            <section className="content">
              {this.props.items.map((item, i) => {
                return <Item content={item} key={i} />;
              })}
            </section>
          ) : (
            <p>No items found. Try 'Matter' for example.</p>
          )
        ) : (
          <p>Content is loading...</p>
        )}
      </>
    );
  }
}

export default Content;
