import IEpisode from "../../interfaces/IEpisode";
import "./index.css";
import Item from "../Item";
import { FC, ReactElement } from "react";

type TContentProps = {
  items: IEpisode[] | undefined | null;
};

const Content: FC<TContentProps> = ({ items }): ReactElement => {
  return (
    <>
      {items ? (
        items.length ? (
          <section className="content">
            {items.map((item, i) => {
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
};

export default Content;
